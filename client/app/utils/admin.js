import API from "./api";

export const updateUserRole = async (userData) => {
    try {
        const response = await API.put("/admin/update-role", userData);
        return response.data;
    } catch (error) {
        throw error.response?.data || "Failed to update user role";
    }
};

export const getSystemAnalytics = async () => {
    try {
        const response = await API.get("/admin/analytics")
        return response.data;
    } catch (error) {
        throw error.response?.data || "Failed to fetch analytics"
    }
};
