"use client";

import { useContext, useEffect, useState } from "react";
import { getAllApplications, updateApplicationStatus } from "../utils/applications";
import { useRouter } from "next/navigation";
import DataContext from "../context/DataContext";

const Page = () => {
    const [applications, setApplications] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [selectedApplication, setSelectedApplication] = useState(null);
    const router = useRouter();

    const {setUserData} = useContext(DataContext)

    const fetchApplications = async () => {
        try {
            const response = await getAllApplications();
            setApplications(response.applications);
            setUserData(response.user)
        } catch (error) {
            console.error("Error fetching applications:", error);
        }
    };

    const handleStatusChange = (jobId, userId, newStatus, application) => {
        setSelectedStatus(newStatus);
        setSelectedApplication(application);
        setShowConfirmation(true);
    };

    const confirmStatusChange = async () => {
        try {
            await updateApplicationStatus({
                jobId: selectedApplication.jobId._id,
                userId: selectedApplication.userId._id,
                newStatus: selectedStatus,
            });

            setApplications((prevApplications) =>
                prevApplications.map((application) =>
                    application.jobId._id === selectedApplication.jobId._id &&
                    application.userId._id === selectedApplication.userId._id
                        ? { ...application, status: selectedStatus }
                        : application
                )
            );

            setShowConfirmation(false);
        } catch (error) {
            console.log("Error updating status:", error);
        }
    };

    const cancelStatusChange = () => {
        setShowConfirmation(false);
        setSelectedStatus(null);
        setSelectedApplication(null);
    };

    useEffect(() => {
        fetchApplications();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-900 min-h-screen text-gray-200">
            <h1 className="text-3xl font-bold text-center mb-6 text-white">Job Applications</h1>
            {applications.length > 0 ? (
                applications.map((application) => (
                    <div key={application._id} className="bg-gray-800 shadow-lg rounded-lg p-6 mb-4 hover:bg-gray-700 transition">
                        <h2 className="text-xl font-semibold text-white">{application.jobId.title}</h2>
                        <p className="text-gray-400">
                            {application.jobId.jobType} | {application.jobId.location}
                        </p>
                        <p className="text-gray-400">Experience: {application.jobId.experience} years</p>
                        <p className="mt-2 font-medium text-white">Application Status:</p>
                        <select
                            className="block w-full p-2 border rounded mt-1 bg-gray-700 text-white focus:ring focus:ring-blue-500"
                            value={application.status}
                            onChange={(e) =>
                                handleStatusChange(
                                    application.jobId._id,
                                    application.userId._id,
                                    e.target.value,
                                    application
                                )
                            }
                        >
                            <option value="Applied">Applied</option>
                            <option value="Interview Scheduled">Interview Scheduled</option>
                            <option value="Selected">Selected</option>
                            <option value="Rejected">Rejected</option>
                        </select>
                        <div
                            onClick={() => router.push(`profiles/${application.userId._id}`)}
                            className="mt-4 cursor-pointer p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
                        >
                            <p className="text-lg font-medium text-white">Applicant Details</p>
                            <p className="text-gray-300">{application.userId.name}</p>
                            <p className="text-gray-300">{application.userId.email}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-400">No applications found.</p>
            )}

            {/* Confirmation Dialog */}
            {showConfirmation && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-center">
                        <h2 className="text-lg font-semibold mb-4 text-white">Confirm Status Change</h2>
                        <p className="text-gray-400 mb-4">
                            Are you sure you want to change the status to{" "}
                            <span className="font-bold text-blue-400">{selectedStatus}</span>?
                        </p>
                        <div className="flex justify-between">
                            <button
                                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
                                onClick={cancelStatusChange}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                                onClick={confirmStatusChange}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
