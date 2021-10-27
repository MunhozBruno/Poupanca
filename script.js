      var saidaSaldo = document.getElementById('saldo');
      var saidaExtrato = document.getElementById('extrato');
      var valorHTML = document.getElementById('valor');

      function dataCurta() {
        var data = new Date();
        var d = data.getDate();
        var m = data.getMonth()+1;
        var a = data.getFullYear();
        var h = data.getHours();
        var i = data.getMinutes();

        if(d<=9) { d = "0" + d; }
        if(m<=9) { m = "0" + m; }
        if(h<=9) { h = "0" + h; }
        if(i<=9) { i = "0" + i; }

        return d + "/" + m + "/" + a + " - " + h + ":" + i;
      }

      var poupanca = {
        saldo: 0,
        movimentacao: [],

        depositar: function () {
          var valor = Number(valorHTML.value);
          this.saldo += valor;
          saidaSaldo.innerHTML = "R$ " + this.saldo.toFixed(2);
          this.movimentacao.push(dataCurta() + " - Depósito - R$ " + valor.toFixed(2));
          valorHTML.value = "";
        },
        sacar: function () {
          var valorSaque = Number(valorHTML.value);
          if(valorSaque>this.saldo) {
            alert("Saldo Insuficiente!")
          } else {
            this.saldo -= valorSaque;
            this.movimentacao.push(dataCurta() + " - Saque - R$ " + valorSaque.toFixed(2));
          }
          saidaSaldo.innerHTML = "R$ " + this.saldo.toFixed(2);
          valorHTML.value = "";
        },
        exibirExtrato: function () {
          saidaExtrato.innerHTML = "Extrato: <br>";
          for(i=0; i<=this.movimentacao.length-1; i++) {
            saidaExtrato.innerHTML += this.movimentacao[i] + "<br>";
          }
        }
      }