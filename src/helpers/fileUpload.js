export const fileUpload = async (file) => {
  if (!file) throw new Error("There isnt a file");

  const cloudUrl = "https://api.cloudinary.com/v1_1/dlcftpe3u/upload";
  const formData = new FormData();

  formData.append("upload_preset", "react-journal");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) throw new Error("No se pudo subir una imagen");
    const cloudResp = await resp.json();

    return cloudResp.secure_url;
  } catch (e) {
    throw new Error(error.message);
  }
};
