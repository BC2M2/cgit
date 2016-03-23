function ActualizarPorcentajes(){
		//Patrimonio
		var PATRIC = Number(document.getElementById("PATRIC").value);
		var PATRICA = Number(document.getElementById("PATRICA").value);
		var PATRIEDR = Number(document.getElementById("PATRIEDR").value);
		var PATRIR = Number(document.getElementById("PATRIR").value);
		var PATRIRA = Number(document.getElementById("PATRIRA").value);
		var PATRIRDE = Number(document.getElementById("PATRIRDE").value);
		var PATRIO = Number(document.getElementById("PATRIO").value);

		

		//Pasivos
		var PCBDC = Number(document.getElementById("PCBDC").value);
		var PCBDF = Number(document.getElementById("PCBDF").value);
		var PCODF = Number(document.getElementById("PCODF").value);
		var PCPCDD = Number(document.getElementById("PCPCDD").value);
		var PCTPP = Number(document.getElementById("PCTPP").value);
		var PCRYPPP = Number(document.getElementById("PCRYPPP").value);
		var PCP = Number(document.getElementById("PCP").value);
		var PCCPPSR = Number(document.getElementById("PCCPPSR").value);
		var PCCPPD = Number(document.getElementById("PCCPPD").value);
		var PCOPC = Number(document.getElementById("PCOPC").value);
		var PCPD = Number(document.getElementById("PCPD").value);
		var PCGD = Number(document.getElementById("PCGD").value);
		var PNCBDF = Number(document.getElementById("PNCBDF").value);
		var PNCODF = Number(document.getElementById("PNCODF").value);
		var PNCCPPSR = Number(document.getElementById("PNCCPPSR").value);
		var PNCOPNC = Number(document.getElementById("PNCOPNC").value);
		var PNCPD = Number(document.getElementById("PNCPD").value);
		var PNCGD = Number(document.getElementById("PNCGD").value);
		var PNCIYPD = Number(document.getElementById("PNCIYPD").value);
		var OIM = Number(document.getElementById("OIM").value);

		//Totales
		var TPC = Number(document.getElementById("TPC").value);
		if(isNaN(TPC)){
			TPC=0;
		}
		var TPNC = Number(document.getElementById("TPNC").value);
		if(isNaN(TPNC)){
			TPNC=0;
		}
		var TP = Number(document.getElementById("TP").value);
		if(isNaN(TP)){
			TP=0;
		}
		var TPATRI = Number(document.getElementById("TPATRI").value);
		if(isNaN(TPATRI)){
			TPATRI=0;
		}
		
		//Ambos
		SumarPPATRI();
		var TPPATRI = Number(document.getElementById("TPPATRI").value);

		if(TPPATRI!=0){
			//Patrimonio
			var PATRICP = (PATRIC/TPPATRI)*100;
			var PATRICAP = (PATRICA/TPPATRI)*100;
			var PATRIEDRP = (PATRIEDR/TPPATRI)*100;
			var PATRIRP = (PATRIR/TPPATRI)*100;
			var PATRIRAP = (PATRIRA/TPPATRI)*100;
			var PATRIRDEP = (PATRIRDE/TPPATRI)*100;
			var PATRIOP = (PATRIO/TPPATRI)*100;

			//Pasivos
			var PCBDCP = (PCBDC/TPPATRI)*100;
			var PCBDFP = (PCBDF/TPPATRI)*100;
			var PCODFP = (PCODF/TPPATRI)*100;
			var PCPCDDP = (PCPCDD/TPPATRI)*100;
			var PCTPPP = (PCTPP/TPPATRI)*100;
			var PCRYPPPP = (PCRYPPP/TPPATRI)*100;
			var PCPP = (PCP/TPPATRI)*100;
			var PCCPPSRP = (PCCPPSR/TPPATRI)*100;
			var PCCPPDP = (PCCPPD/TPPATRI)*100;
			var PCOPCP = (PCOPC/TPPATRI)*100;
			var PCPDP = (PCPD/TPPATRI)*100;
			var PCGDP = (PCGD/TPPATRI)*100;
			var PNCBDFP = (PNCBDF/TPPATRI)*100;
			var PNCODFP = (PNCODF/TPPATRI)*100;
			var PNCCPPSRP = (PNCCPPSR/TPPATRI)*100;
			var PNCOPNCP = (PNCOPNC/TPPATRI)*100;
			var PNCPDP = (PNCPD/TPPATRI)*100;
			var PNCGDP = (PNCGD/TPPATRI)*100;
			var PNCIYPDP = (PNCIYPD/TPPATRI)*100;
			var OIMP = (OIM/TPPATRI)*100;

			//Totales


			var TPCP = (TPC/TPPATRI)*100;
			var TPNCP = (TPNC/TPPATRI)*100;
			var TPP = (TP/TPPATRI)*100;
			var TPATRIP = (TPATRI/TPPATRI)*100;

			document.getElementById("TPCP").innerHTML = TPCP.toFixed(2) + "%";
			document.getElementById("TPNCP").innerHTML = TPNCP.toFixed(2) + "%";
			document.getElementById("OIMP").innerHTML = OIMP.toFixed(2) + "%";
			document.getElementById("TPP").innerHTML = TPP.toFixed(2) + "%";
			document.getElementById("TPATRIP").innerHTML = TPATRIP.toFixed(2) + "%";

			document.getElementById("PCBDCP").innerHTML = PCBDCP.toFixed(2) + "%";
			document.getElementById("PCBDFP").innerHTML = PCBDFP.toFixed(2) + "%";
			document.getElementById("PCODFP").innerHTML = PCODFP.toFixed(2) + "%";
			document.getElementById("PCPCDDP").innerHTML = PCPCDDP.toFixed(2) + "%";
			document.getElementById("PCTPPP").innerHTML = PCTPPP.toFixed(2) + "%";
			document.getElementById("PCRYPPPP").innerHTML = PCRYPPPP.toFixed(2) + "%";
			document.getElementById("PCPP").innerHTML = PCPP.toFixed(2) + "%";
			document.getElementById("PCCPPSRP").innerHTML = PCCPPSRP.toFixed(2) + "%";
			document.getElementById("PCCPPDP").innerHTML = PCCPPDP.toFixed(2) + "%";
			document.getElementById("PCOPCP").innerHTML = PCOPCP.toFixed(2) + "%";
			document.getElementById("PCPDP").innerHTML = PCPDP.toFixed(2) + "%";
			document.getElementById("PCGDP").innerHTML = PCGDP.toFixed(2) + "%";
			document.getElementById("PNCBDFP").innerHTML = PNCBDFP.toFixed(2) + "%";
			document.getElementById("PNCODFP").innerHTML = PNCODFP.toFixed(2) + "%";
			document.getElementById("PNCCPPSRP").innerHTML = PNCCPPSRP.toFixed(2) + "%";
			document.getElementById("PNCOPNCP").innerHTML = PNCOPNCP.toFixed(2) + "%";
			document.getElementById("PNCPDP").innerHTML = PNCPDP.toFixed(2) + "%";
			document.getElementById("PNCGDP").innerHTML = PNCGDP.toFixed(2) + "%";
			document.getElementById("PNCIYPDP").innerHTML = PNCIYPDP.toFixed(2) + "%";



			document.getElementById("PATRICP").innerHTML = PATRICP.toFixed(2) + "%";
			document.getElementById("PATRICAP").innerHTML = PATRICAP.toFixed(2) + "%";
			document.getElementById("PATRIEDRP").innerHTML = PATRIEDRP.toFixed(2) + "%";
			document.getElementById("PATRIRP").innerHTML = PATRIRP.toFixed(2) + "%";
			document.getElementById("PATRIRAP").innerHTML = PATRIRAP.toFixed(2) + "%";
			document.getElementById("PATRIRDEP").innerHTML = PATRIRDEP.toFixed(2) + "%";
			document.getElementById("PATRIOP").innerHTML = PATRIOP.toFixed(2) + "%";
	 	}else{

	 		document.getElementById("TPCP").innerHTML = "0.00%";
			document.getElementById("TPNCP").innerHTML = "0.00%";
			document.getElementById("OIMP").innerHTML = "0.00%";
			document.getElementById("TPP").innerHTML = "0.00%";
			document.getElementById("TPATRIP").innerHTML = "0.00%";

			document.getElementById("PCBDCP").innerHTML = "0.00%";
			document.getElementById("PCBDFP").innerHTML = "0.00%";
			document.getElementById("PCODFP").innerHTML = "0.00%";
			document.getElementById("PCPCDDP").innerHTML = "0.00%";
			document.getElementById("PCTPPP").innerHTML = "0.00%";
			document.getElementById("PCRYPPPP").innerHTML = "0.00%";
			document.getElementById("PCPP").innerHTML = "0.00%";
			document.getElementById("PCCPPSRP").innerHTML = "0.00%";
			document.getElementById("PCCPPDP").innerHTML = "0.00%";
			document.getElementById("PCOPCP").innerHTML = "0.00%";
			document.getElementById("PCPDP").innerHTML = "0.00%";
			document.getElementById("PCGDP").innerHTML = "0.00%";
			document.getElementById("PNCBDFP").innerHTML = "0.00%";
			document.getElementById("PNCODFP").innerHTML = "0.00%";
			document.getElementById("PNCCPPSRP").innerHTML = "0.00%";
			document.getElementById("PNCOPNCP").innerHTML = "0.00%";
			document.getElementById("PNCPDP").innerHTML = "0.00%";
			document.getElementById("PNCGDP").innerHTML = "0.00%";
			document.getElementById("PNCIYPDP").innerHTML = "0.00%";


	 		document.getElementById("PATRICP").innerHTML = "0.00%";
			document.getElementById("PATRICAP").innerHTML = "0.00%";
			document.getElementById("PATRIEDRP").innerHTML = "0.00%";
			document.getElementById("PATRIRP").innerHTML = "0.00%";
			document.getElementById("PATRIRAP").innerHTML = "0.00%";
			document.getElementById("PATRIRDEP").innerHTML = "0.00%";
			document.getElementById("PATRIOP").innerHTML = "0.00%";
			document.getElementById("TPATRIP").innerHTML = "0.00%";
			document.getElementById("TPPATRIP").innerHTML = "0.00%";
		}


	}
