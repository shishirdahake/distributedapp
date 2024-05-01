from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/formdata', methods=['POST'])
def formdata():
    if request.method == 'POST':
        data = request.get_json()
        print(data)

        return {'message': 'data recieved', 'data': data}



if __name__ == '__main__':
    app.run()