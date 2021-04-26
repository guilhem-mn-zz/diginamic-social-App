const getMeApi = async (token) => {
  try {
    const rawResult = await fetch(`${process.env.REACT_APP_API_URL}/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!rawResult.ok) {
      token = "";
      localStorage.removeItem("token");
    }
    const result = await rawResult.json();
    return { ...result, token };
  } catch (e) {
    console.log("erreur: ", e);
  }
};

export default getMeApi;
