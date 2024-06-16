// ApiClient.js

import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api";

const ApiClient = {
  getProducts: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      return response.data.products;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  deleteProduct: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/productdelete/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  },

  getProductById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/products/${id}`);
      return response.data.product;
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  },

  updateProduct: async (id, formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/productupdate/${id}`, formData, {
        headers: { 'Content-Type': "multipart/form-data" },
      });
      return response.data.message;
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  },

  addProduct: async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/products`, formData, {
        headers: { 'Content-Type': "multipart/form-data" },
      });
      return response.data.message;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  }

};

export default ApiClient;
