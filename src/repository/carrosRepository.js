import con from "./connection.js";

export async function inserirCarros(carro){

const comando = `
insert into tb_carro (ds_marca, ds_modelo, nr_ano, vl_preco, img_Carro, dt_inclusao) 
values (?, ?, ?, ?, ?,?);
`
let resposta= await con.query(comando, [carro.marca, carro.modelo, carro.ano, carro.preco, carro.img, carro.inclusao])
let info = resposta[0];

return info.insertId;
}

export async function alterarCarros(id,carro){
    const comando = `
    update tb_carro 
    set  ds_marca =?,
    ds_modelo =?,
    nr_ano=?,
    vl_preco=?,
    img_Carro= ?,
    dt_inclusao=?

    where id_carro = ?;
    `
    let resposta= await con.query(comando, [carro.nome, carro.motivo, carro.vinganca, carro.notaOdio, carro.perdoado, id])
    let info = resposta[0];

    return info.affectedRows;

}

export async function consultarCarros(){
    const comando = `
    select id_carro     id,
    ds_marca            marca,
    ds_modelo           modelo,
    nr_ano              ano ,
    vl_preco            preco,
    img_Carro           imagem,
    dt_inclusao         inclusao
    from tb_carro
    `
    let resposta= await con.query(comando)
    let registros = resposta[0];

    return registros
}

export async function removerCarro(id){

const comando = `
delete from tb_carro
where id_carro = ?
`
let resposta= await con.query(comando, [id])
let info = resposta[0];

return info.affectedRows;
}