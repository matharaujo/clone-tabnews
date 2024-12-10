function status(request, response) {
  response.status(200).json({ success: "ok" });
}

export default status;
