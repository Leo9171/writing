const prompt = document.getElementById("prompt").innerText;
const text = document.getElementById("text").value;
const accessKey = "YOUR_UNSPLASH_ACCESS_KEY";

function generateImage() {
	axios
	.get(`https://api.unsplash.com/photos/random?query=${text}&client_id=${accessKey}`)
	.then(response => {
		const imageUrl = response.data.urls.regular;
		const image = document.createElement("img");
		image.src = imageUrl;
		document.getElementById("image-container").appendChild(image);
	})
	.catch(error => console.log(error));
}
