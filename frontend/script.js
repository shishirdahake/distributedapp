let form = document.getElementById('myForm');


form.addEventListener("submit", 
    (e) => {
        e.preventDefault();
        let formData = new FormData(form);
        
        let data = Object.fromEntries(formData);

        let options = {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        console.log(options);

        fetch(url='http://127.0.0.1:5000/formdata', options)
                .then((resp) => resp.json())
                .then((data) => console.log(data))
                .catch((e) => console.log(e));
        
        }   

    
);

// console.log(data_from_form);





