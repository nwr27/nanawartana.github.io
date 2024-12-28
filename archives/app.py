from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/send-message", methods=["POST"])
def send_message():
    name = request.form.get("name")
    message = request.form.get("message")
    print(f"Message from {name}: {message}")
    return "Message sent!"

if __name__ == "__main__":
    app.run(debug=True)
