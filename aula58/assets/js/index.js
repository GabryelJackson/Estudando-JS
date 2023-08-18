function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        inicia: function() {
            this.cliqueBotoes();
            this.pressionaEnter();
        }, 
        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },
        clearDisplay() {
            this.display.value = '';
        },
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if(!conta) {
                    alert('Conta Invádida');
                    return;
                }
                this.display.value = conta;
            } catch(e) {
                alert('Conta Invádida');
                return;
            }
        },
        cliqueBotoes: function() {
            document.addEventListener('click', function(e) {
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
            }.bind(this));
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();