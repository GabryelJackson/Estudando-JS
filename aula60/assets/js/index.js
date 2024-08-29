function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    }

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if(e.keyCode === 13) {
                this.realizaConta();
            }
        });
    }

    this.clearDisplay = () => {
        this.display.value = '';
    }

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    }

    this.realizaConta = () => {
        let conta = this.display.value;
        try {
            conta = eval(conta);
            if(!conta) {
                alert('Conta Inválida');
                return;
            }
            this.display.value = conta;
        } catch (e) {
            alert('Conta Inválida!')
            return;
        }
    }

    this.cliqueBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if(el.classList.contains('btnNum')) {
                this.btnParaDisplay(el.innerText);
            }
            if(el.classList.contains('btnClear')) {
                this.clearDisplay();
            }
            if(el.classList.contains('btnDel')) {
                this.apagaUm();
            }
            if(el.classList.contains('btnEqual')) {
                this.realizaConta();
            }
            this.display.focus();
        })
    }

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
    }
}

const calculadora = new Calculadora();
calculadora.inicia();

