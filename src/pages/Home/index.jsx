import "./styles.css";
import InputNotes from "../../components/InputNotes"
import Note from "../../components/Note"
import { useEffect, useState } from "react";

function Home(userDetails) {
	// const URL = "https://ideabox-api-dlu6.onrender.com";
	const URL = "http://localhost:8080";
	const user = userDetails.user;
	const userKey = user.sub;
	// console.log(userKey);
	const logout = () => {
		window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
	};

	// console.log(user);

	const [ideas, setIdeas] = useState([]);
	

	async function addIdea(obj) {
		obj.userKey = userKey
		console.log(obj);
		try {
		  const response = await fetch(`${URL}/ideas/new`, {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			},
			body: JSON.stringify(obj),
		  });
	
		  const idea = await response.json();
		  setIdeas((prevIdea) => [...prevIdea, idea]);
		} catch (error) {
		  console.error("Error : ", error);
		}
	  }
	
	  async function deleteIdea(id) {
		try {
		  const res = await fetch(`${URL}/ideas/delete/${id}/${userKey}`, {
			method: "DELETE",
		  });
	
		  if (!res.ok) {
			throw new Error(`Request failed with status: ${res.status}`);
		  }
	
		  setIdeas((prevIdea) => {
			return prevIdea.filter((item) => {
			  return item._id !== id;
			});
		  });
		  GetIdeas();
		} catch (error) {
		  console.error("Error:", error);
		}
	  }
	
	  async function GetIdeas() {
		try {
		  const response = await fetch(`${URL}/ideas/idea?userKey=${userKey}`, {
			method: "GET",
			headers: {
			  "Content-Type": "application/json",
			},
		  });
	
		  if (!response.ok) {
			throw new Error(`Request failed with status: ${response.status}`);
		  }
	
		  const data = await response.json();
		  setIdeas(data);
		} catch (error) {
		  console.error("Error:", error);
		}
	  }

	  useEffect(() => {
		GetIdeas();
	  }, []);


	return (
		<div>
		<div className="App">
          
          <InputNotes addIdea={addIdea} />
          {ideas.map((idea, index) => {
            return (
              <Note
                key={index}
                id={idea.id}
                title={idea.title}
                content={idea.content}
                deleteIdea={deleteIdea}
              />
            );
          })}
        </div>
		<div className="button-container">
			<button onClick={logout} className="logout-button">
				Logout
			</button>
		</div>
		</div>

	)

}

export default Home;

