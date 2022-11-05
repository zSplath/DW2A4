export const valid = {
	cpf(cpf) {	
		cpf = cpf.replace(/[^\d]+/g,'');	
		let add
		let i
		let rev
		if(cpf == '') return false;	
		// Elimina CPFs invalidos conhecidos	
		if (cpf.length != 11 || 
			cpf == "00000000000" || 
			cpf == "11111111111" || 
			cpf == "22222222222" || 
			cpf == "33333333333" || 
			cpf == "44444444444" || 
			cpf == "55555555555" || 
			cpf == "66666666666" || 
			cpf == "77777777777" || 
			cpf == "88888888888" || 
			cpf == "99999999999")
				return false;		
		// Valida 1o digito	
		add = 0;	
		for (i=0; i < 9; i ++)		
			add += parseInt(cpf.charAt(i)) * (10 - i);	
			rev = 11 - (add % 11);	
			if (rev == 10 || rev == 11)		
				rev = 0;	
			if (rev != parseInt(cpf.charAt(9)))		
				return false;		
		// Valida 2o digito	
		add = 0;	
		for (i = 0; i < 10; i ++)		
			add += parseInt(cpf.charAt(i)) * (11 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)	
			rev = 0;	
		if (rev != parseInt(cpf.charAt(10)))
			return false;		
		return true;   
	},

	nome(nome) {
		if (nome == "" || nome == null) 
		return false
		return true
	},

	date(data) {
		if (data.length != 10 ) return false

		let dma = data.split('/')

		if (dma[0] > 31) return false
		if (dma[1] > 12) return false
		if (dma[2] < 1890) return false
		if (dma[2] > 2100) return false

		return true
	},

	email(email) {
		var re = /\S+@\S+\.\S+/;

		if (re.test(email))
		return true
		return false
	},

	fone(phone) {
		if (phone.length < 14 )
		return false
		return true
	},

	cep(cep) {
		if (cep.length != 9 )
			return false
		return true
	}
}
