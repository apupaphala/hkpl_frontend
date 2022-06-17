document.getElementById("pageTitle").innerHTML = "HK Premier League";

function myFunction() {
  var x = document.getElementById("navBar2");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function json2table () {
    var json = [
                           {
                               "standing_place": "1",
                               "standing_place_type": "Championship Round",
                               "standing_team": "Southern District",
                               "standing_P": "4",
                               "standing_W": "4",
                               "standing_D": "0",
                               "standing_L": "0",
                               "standing_F": "12",
                               "standing_A": "1",
                               "standing_GD": "11",
                               "standing_PTS": "12",
                               "team_key": "4546",
                               "league_key": "186",
                               "league_season": "2021/2022",
                               "league_round": "",
                               "standing_updated": "2022-06-09 08:14:39",
                               "fk_stage_key": "1063",
                               "stage_name": "Current"
                           },
                           {
                               "standing_place": "2",
                               "standing_place_type": "Championship Round",
                               "standing_team": "Kitchee",
                               "standing_P": "4",
                               "standing_W": "3",
                               "standing_D": "1",
                               "standing_L": "0",
                               "standing_F": "15",
                               "standing_A": "3",
                               "standing_GD": "12",
                               "standing_PTS": "10",
                               "team_key": "412",
                               "league_key": "186",
                               "league_season": "2021/2022",
                               "league_round": "",
                               "standing_updated": "2022-06-09 08:14:39",
                               "fk_stage_key": "1063",
                               "stage_name": "Current"
                           },
                           {
                               "standing_place": "3",
                               "standing_place_type": "Championship Round",
                               "standing_team": "Lee Man",
                               "standing_P": "3",
                               "standing_W": "2",
                               "standing_D": "1",
                               "standing_L": "0",
                               "standing_F": "9",
                               "standing_A": "2",
                               "standing_GD": "7",
                               "standing_PTS": "7",
                               "team_key": "459",
                               "league_key": "186",
                               "league_season": "2021/2022",
                               "league_round": "",
                               "standing_updated": "2022-06-09 08:14:39",
                               "fk_stage_key": "1063",
                               "stage_name": "Current"
                           },
                           {
                               "standing_place": "4",
                               "standing_place_type": "Championship Round",
                               "standing_team": "Eastern",
                               "standing_P": "4",
                               "standing_W": "2",
                               "standing_D": "0",
                               "standing_L": "2",
                               "standing_F": "8",
                               "standing_A": "4",
                               "standing_GD": "4",
                               "standing_PTS": "6",
                               "team_key": "458",
                               "league_key": "186",
                               "league_season": "2021/2022",
                               "league_round": "",
                               "standing_updated": "2022-06-09 08:14:39",
                               "fk_stage_key": "1063",
                               "stage_name": "Current"
                           },
                           {
                               "standing_place": "5",
                               "standing_place_type": "Relegation Round",
                               "standing_team": "BC Rangers",
                               "standing_P": "4",
                               "standing_W": "2",
                               "standing_D": "0",
                               "standing_L": "2",
                               "standing_F": "11",
                               "standing_A": "15",
                               "standing_GD": "-4",
                               "standing_PTS": "6",
                               "team_key": "4543",
                               "league_key": "186",
                               "league_season": "2021/2022",
                               "league_round": "",
                               "standing_updated": "2022-06-09 08:14:39",
                               "fk_stage_key": "1063",
                               "stage_name": "Current"
                           },
                           {
                               "standing_place": "6",
                               "standing_place_type": "Relegation Round",
                               "standing_team": "Hong Kong",
                               "standing_P": "4",
                               "standing_W": "0",
                               "standing_D": "1",
                               "standing_L": "3",
                               "standing_F": "4",
                               "standing_A": "11",
                               "standing_GD": "-7",
                               "standing_PTS": "1",
                               "team_key": "4552",
                               "league_key": "186",
                               "league_season": "2021/2022",
                               "league_round": "",
                               "standing_updated": "2022-06-09 08:14:39",
                               "fk_stage_key": "1063",
                               "stage_name": "Current"
                           },
                           {
                               "standing_place": "7",
                               "standing_place_type": "Relegation Round",
                               "standing_team": "HK U23",
                               "standing_P": "4",
                               "standing_W": "0",
                               "standing_D": "1",
                               "standing_L": "3",
                               "standing_F": "3",
                               "standing_A": "16",
                               "standing_GD": "-13",
                               "standing_PTS": "1",
                               "team_key": "23132",
                               "league_key": "186",
                               "league_season": "2021/2022",
                               "league_round": "",
                               "standing_updated": "2022-06-09 08:14:39",
                               "fk_stage_key": "1063",
                               "stage_name": "Current"
                           },
                           {
                               "standing_place": "8",
                               "standing_place_type": "Relegation Round",
                               "standing_team": "Resources Capital",
                               "standing_P": "3",
                               "standing_W": "0",
                               "standing_D": "0",
                               "standing_L": "3",
                               "standing_F": "3",
                               "standing_A": "13",
                               "standing_GD": "-10",
                               "standing_PTS": "0",
                               "team_key": "4544",
                               "league_key": "186",
                               "league_season": "2021/2022",
                               "league_round": "",
                               "standing_updated": "2022-06-09 08:14:39",
                               "fk_stage_key": "1063",
                               "stage_name": "Current"
                           }
                       ];
    var tr;
    for (var i = 0; i < json.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + json[i].Supplier + "</td>");
        tr.append("<td>" + json[i].Product + "</td>");
        tr.append("<td>" + json[i].Quantity + "</td>");
        $('table').append(tr);
    }
});