import store from "./store";

const dashboard_utils = {
    getXML() {
        return new Promise(function (resolve, reject) {
            var username = store.getters['username'];
            var password = store.getters['password'];
            var dashboard = store.getters['dashboard'];
            // var paenadashboard = store.getters['paenadashboard'];


            var xhttp = new XMLHttpRequest()

            // if(dashboard == "ZNA Dash Test") {
            // //Testdaten ZNA
            // xhttp.open("GET", "https://hagen.mh-hannover.local/csp/scs/ZNADashboardTest/MHH.ENS.BS.REST.ToDashboardXml.cls?CfgItem=MHH.ENS.BS.REST.ToDashboardXml&Profil=ZNA");
            // }
            // //if(dashboard == "ZNA Dash Test") {
            // //Testdaten
            // //xhttp.open("GET", "https://hagen.mh-hannover.local/csp/scs/ZNADashboardTest/");
            // //}
            // else if(paenadashboard == "PAENA Dash Test") {
            // //Testdaten PAENA
            // xhttp.open("GET", "https://hugin.mh-hannover.local/csp/webservice/Dashboard/MHH.ENS.BS.REST.ToDashboardXml.cls?CfgItem=MHH.ENS.BS.REST.ToDashboardXml&Profil=PAENA");
            // }
            // //else if(dashboard == "PAENA Dash Prod.") {
            // //Produktive Daten PAENA
            // //xhttp.open("GET", "");
            // //}
            // else {
            // //produktive Daten    
            // xhttp.open("GET", "https://hugin.mh-hannover.local/csp/webservice/Dashboard/MHH.ENS.BS.REST.ToDashboardXml.cls?CfgItem=MHH.ENS.BS.REST.ToDashboardXml&Profil=PAENA");
            // }

            switch (dashboard) {
                case "ZNA Dash Test":
                    console.log('zna dash test');
                    xhttp.open("GET", "https://hagen.mh-hannover.local/csp/scs/Dashboard/MHH.ENS.BS.REST.ToDashboardXml.cls?CfgItem=MHH.ENS.BS.REST.ToDashboardXml&Profil=ZNA")
                    break;

                case "PAENA Dash Prod.":
                    console.log('paena dash prod');
                    xhttp.open("GET", "https://hugin.mh-hannover.local/csp/webservice/Dashboard/MHH.ENS.BS.REST.ToDashboardXml.cls?CfgItem=MHH.ENS.BS.REST.ToDashboardXml&Profil=PAENA");
                    break;

                case "PAENA Dash Test":
                    console.log('paena dash test');
                    xhttp.open("GET", "https://hagen.mh-hannover.local/csp/scs/Dashboard/MHH.ENS.BS.REST.ToDashboardXml.cls?CfgItem=MHH.ENS.BS.REST.ToDashboardXml&Profil=PAENA");
                    break;

                default:
                    console.log('zna dash prod');
                    xhttp.open("GET", "https://hugin.mh-hannover.local/csp/webservice/Dashboard/MHH.ENS.BS.REST.ToDashboardXml.cls?CfgItem=MHH.ENS.BS.REST.ToDashboardXml&Profil=ZNA");
                    break;
            }



            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        resolve(this.responseXML);
                    } else {
                        reject('Request failed: ' + this.status);
                    }
                }
            }

            xhttp.onerror = function () {
                reject('Request failed');
            };

            xhttp.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
            xhttp.send();
        });
    }
}

export default dashboard_utils;
