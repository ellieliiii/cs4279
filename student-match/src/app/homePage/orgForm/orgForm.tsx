import React, { useState } from "react";
import "../homePage.css";
import { Org } from "@/app/homePage/types";
import { useNavigate } from "react-router-dom";

interface OrgFormProps {
    onSubmit: (org: Org) => void;
}

const OrgForm: React.FC<OrgFormProps>  = ({ onSubmit }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
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

    const createOrgRequest = async(data: Object) => {
        const url = "https://3-140-189-217.nip.io/api/org";
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
        createOrgRequest(body)
            .then((res) => {
                if (res) {
                    console.log("Successfully created org");
                    const orgData: Org = {
                        orgId: res.orgId,
                        title: res.title,
                        description: res.description,
                        creator: res.creator,
                        membershipIds: res.membershipIds
                    }; 
                    onSubmit(orgData);
                } else {
                    console.log("Error creating org");
                }
            })
            .catch((error) => {
                console.error("Error creating org:", error);
            });
        setFormData({
            title: "",
            description: "",
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
            <h2 className="org_header">Register a New Organization</h2>
            <form className="org_form" onSubmit={handleSubmit}>
                <label htmlFor="title">Organization Name:</label>
                <br className="title_break"></br>
                <input
                    className="org_input"
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
                <label htmlFor="organizer">Main Contact:</label>
                <br className="title_break"></br>
                <input
                    className="org_input"
                    type="text"
                    id="organizer"
                    name="organizer"
                    value={formData.organizer}
                    onChange={handleChange}
                />
                <br></br>
                <br></br>
                <br></br>
                <button className="org_button" type="submit">
                    Register Organization
                </button>
                <button className="org_button" onClick={handleCancel}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default OrgForm;
