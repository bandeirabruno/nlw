import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);

/*
  const users =[
        'Ana',
        'Andre',
        'Bruno',
        'Bruna'
    ];

app.get('/users', (request,response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    
    return response.json(filteredUsers);
});

app.get('/users/:id', (request,response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
})

app.post('/users', (request,response) => {
    const data = request.body;

    const user = {
        name : data.name,
        email: data.email,
    };

        return response.json(user);
});
*/