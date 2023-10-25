// 047.721.381-29 -> Validando CPF

 let cpf = '047.721.381-29';
 let cpfLimpo = cpf.replace(/\D+/g, '');
 cpfArray = Array.from(cpfLimpo);
 console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));