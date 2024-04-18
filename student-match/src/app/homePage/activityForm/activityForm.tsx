import React, { useState } from "react";
import "../homePage.css";
import { Activity } from "@/app/homePage/types";
import { useNavigate } from "react-router-dom";

interface ActivityFormProps {
  onSubmit: (activity: Activity) => void;
}

const ActivityForm: React.FC<ActivityFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    organizer: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const createActRequest = async(data: Object) => {
    const url = "https://3-140-189-217.nip.io/api/act";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data), 
    });
    if (response.status == 201) {
        const data = await response.json();
        return data;
    } else {
        return [];
    }
}

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let userId = 0;
    const currentUser = global?.window?.localStorage?.getItem("user");
    if (currentUser) {
        userId = JSON.parse(currentUser).userId; 
    }
    const body = {
        ...formData,
        userId: userId,
        membershipIds: []
    };
    createActRequest(body)
        .then((res) => {
            if (res) {
                console.log("Successfully created act");
                const orgData: Activity = {
                    actId: res.actId,
                    title: res.title,
                    description: res.description,
                    date: res.date,
                    organizer: res.organizer,
                    membershipIds: res.membershipIds
                }; 
                onSubmit(orgData);
            } else {
                console.log("Error creating act");
            }
        })
        .catch((error) => {
            console.error("Error creating act:", error);
        });
    setFormData({
      title: "",
      description: "",
      date: "",
      organizer: "",
    });
    navigate("/homePage");
  };

  const handleCancel = () => {
    // Redirect to the home activity page
    navigate("/homePage");
  };

  return (
    <div>
      <h2 className="activity_header">Post a New Activity</h2>
      <form className="activity_form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <br className="title_break"></br>
        <input
          className="activity_input"
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <br className="desc_break"></br>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="date">Date:</label>
        <br className="title_break"></br>
        <input
          className="activity_input"
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <label htmlFor="organizer">Organizer:</label>
        <br className="title_break"></br>
        <input
          className="activity_input"
          type="text"
          id="organizer"
          name="organizer"
          value={formData.organizer}
          onChange={handleChange}
        />
        <br></br>
        <button className="activity_button" type="submit">
          Post Activity
        </button>
        <button className="activity_button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ActivityForm;
