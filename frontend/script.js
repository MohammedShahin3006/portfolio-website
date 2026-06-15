const text = "Aspiring Java Full Stack Developer";

let i = 0;

function typing() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 100);
    }
}

typing();

document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Message Submitted Successfully!");

});
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        try {

            const response = await fetch(
                "http://localhost:5000/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
            );

            const result = await response.json();

            alert(result.message);

            contactForm.reset();

        } catch (error) {
            alert("Error sending message!");
        }

    });
}