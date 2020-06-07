import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('items').insert([
       {title: 'Lampadas', image : 'lampadas.svg'},
       {title: 'Pilhas', image : 'bateris.svg'}, 
       {title: 'Papelao', image : 'papeis-papelao.svg'},
       {title: 'Residuos Eletronicos', image : 'eletronicos.svg'}, 
       {title: 'Residuos organicos', image : 'organicos.svg'}, 
       {title: 'óleo de cozinha', image : 'ole.svg'}, 
    ]);
}