e = campaignTrail_temp;

nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#000000";

nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#737373";

document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

$(".container")[0].style.backgroundColor = "#404040";

document.getElementById("header").src = "https://cdn.discordapp.com/attachments/991561766037356614/1118330494698934292/Screen_Shot_2023-06-13_at_5.05.57_PM.png";

document.body.background = "https://img.buzzfeed.com/buzzfeed-static/static/2017-09/12/17/asset/buzzfeed-prod-fastlane-02/sub-buzz-27693-1505250717-1.jpg";

e.election_json = [
  {
    model: "campaign_trail.election",
    pk: 11,
    fields: {
      year: 1960,
      summary:
        "<p>The year is 1964 and the British Invasion has just began. Dozens of bands from across the pond are  starting to break through into the American market.</p><p>Chief among these bands are a scrappy group of youngsters from Liverpool named The Beatles. They are now embarking on their first American tour.</p><p>Can you take these fab four to the toppermost of the poppermost, or will they be just another footnote in musical history?</p>",
      image_url:
        "https://cdn.discordapp.com/attachments/991561766037356614/1118333319772389456/fulwtext.png",
      winning_electoral_vote_number: 270,
      advisor_url:
        "https://cdn.discordapp.com/attachments/991561766037356614/1118331720039661568/brian.png",
      recommended_reading:
        "<ul>\n<li><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></li>\n<li><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></li>\n<li><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></li>\n<li><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></li>\n<li><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></li>\n</ul>",
      has_visits: 1,
      no_electoral_majority_image: "../static/images/2012-no-majority.jpg",
    },
  },
];
e.temp_election_list = [
  { id: 11, year: 1960, is_premium: 0, display_year: "1964" },
];
e.credits = "Jet";
e.global_parameter_json = [
  {
    model: "campaign_trail.global_parameter",
    pk: 1,
    fields: {
      vote_variable: 1.125,
      max_swing: 0.12,
      start_point: 0.94,
      candidate_issue_weight: 10,
      running_mate_issue_weight: 3,
      issue_stance_1_max: -0.71,
      issue_stance_2_max: -0.3,
      issue_stance_3_max: -0.125,
      issue_stance_4_max: 0.125,
      issue_stance_5_max: 0.3,
      issue_stance_6_max: 0.71,
      global_variance: 0.01,
      state_variance: 0.005,
      question_count: 25,
      default_map_color_hex: "#C9C9C9",
      no_state_map_color_hex: "#999999",
    },
  },
];
e.candidate_json = [
  {
    model: "campaign_trail.candidate",
    pk: 105,
    fields: {
      first_name: "",
      last_name: "The Beatles",
      election: 11,
      party: "The Beatles",
      state: "Liverpool",
      priority: 1,
      description:
        'John Lennon, Paul McCartney, George Harrison, and Richard "Ringo Starr" Starkey are The Beatles. The hottest band out of Liverpool and kings of the Mersey Beat. Do they have what it takes to make it in America?',
      color_hex: "#7faefa",
      secondary_color_hex: null,
      is_active: 1,
      image_url:
        "https://media.discordapp.net/attachments/991561766037356614/1118335484955983883/beatles.png?width=462&height=528",
      electoral_victory_message: "<h3>BEATLEMANIA TAKES HOLD OF AMERICA</h3><p>In spite of countless barriers and the dominance of American music, The Beatles have triumphed, capturing the hearts and minds of the American people.</p><p>This historic achievement wasn't easy. The Fab Four faced controversy and a multitude of banal press junkets, but their music and charm persevered, propelling them to the toppermost of the poppermost.</p>",
      electoral_loss_message: "<h3>ROLLING STONE FEVER TAKES HOLD OF AMERICA</h3><p>In the face of a formidable challenge from The Rolling Stones, The Beatles never stood a chance. The fab four from Liverpool would never be able to match the raw energy of the Stones.</p><p>The Beatles will be remembered, but mainly by as a curiousity by future music historians. As one timer rivals to the true kings: The Rolling Stones.</p>",
      no_electoral_majority_message: "<h3>NO CLEAR WINNER</h3><p>It isn't clear who was the winner of The British Invasion. Despite a vicious battle between The Rolling Stones and The Beatles.</p><p>In the end both groups were quickly forgotten as the decade wore on. Destined to be just a footnote in music history.</p>",
      description_as_running_mate: null,
      candidate_score: 1,
      running_mate: false,
      scrollable: false,
    },
  },
  {
    model: "campaign_trail.candidate",
    pk: 106,
    fields: {
      first_name: "",
      last_name: "The Rolling Stones",
      election: 11,
      party: "The Rolling Stones",
      state: "London",
      priority: 1,
      description:
        "The Rolling Stones are The Beatles for those who think The Beatles are too pure. Their unique takes on blues rock is getting them some airplay, but they've only just started writing their own tunes.",
      color_hex: "#ff7d66",
      secondary_color_hex: null,
      is_active: 0,
      image_url:
        "https://media.discordapp.net/attachments/991561766037356614/1118335484620456077/stones.png?width=462&height=528",
      electoral_victory_message: "<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>",
      electoral_loss_message: "<h3>Fake News?</h3>",
      no_electoral_majority_message: "<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>",
      description_as_running_mate: null,
      candidate_score: 1,
      running_mate: false,
      scrollable: false,
    },
  },
  {
    model: "campaign_trail.candidate",
    pk: 109,
    fields: {
      first_name: "",
      last_name: "Gerry and the Pacemakers",
      election: 11,
      party: "Gerry and the Pacemakers",
      state: "Liverpool",
      priority: 1,
      description:
        "Gerry and the Pacemakers are a band from Liverpool who, like The Beatles, are managed by Brian Epstein. Brian thinks that they can still get a few hits and make an impression in America.",
      color_hex: "#00ff11",
      secondary_color_hex: null,
      is_active: 0,
      image_url:
        "https://media.discordapp.net/attachments/991561766037356614/1118335484414930954/gerry.png?width=462&height=528",
      electoral_victory_message: "<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>",
      electoral_loss_message: "<h3>Fake News?</h3>",
      no_electoral_majority_message: "<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>",
      description_as_running_mate: null,
      candidate_score: 1,
      running_mate: false,
      scrollable: false,
    },
  },
  {
    model: "campaign_trail.candidate",
    pk: 107,
    fields: {
      first_name: "Elvis",
      last_name: "Presley",
      election: 11,
      party: "Elvis",
      state: "Mississippi",
      priority: 1,
      description:
        "The King of Rock n' Roll himself. Although his fame has wavered in recent years, he is still quite popular with teenagers. Every band from Britain wants to be like Elvis. Will he keep his throne or will he be ousted?",
      color_hex: "#fbff80",
      secondary_color_hex: null,
      is_active: 0,
      image_url:
        "https://media.discordapp.net/attachments/991561766037356614/1118335484125511741/elvis.png?width=462&height=528",
      electoral_victory_message: "<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>",
      electoral_loss_message: "<h3>Fake News?</h3>",
      no_electoral_majority_message: "<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>",
      description_as_running_mate: null,
      candidate_score: 1,
      running_mate: false,
      scrollable: false,
    },
  },
  {
    model: "campaign_trail.candidate",
    pk: 108,
    fields: {
      first_name: "Brian",
      last_name: "Epstein",
      election: 11,
      party: "The Beatles",
      state: "Liverpool",
      priority: 1,
      description:
        "Brian Epstein is the manager of both The Beatles and Gerry and The Pacemakers. As manager he is responsible for The Beatles signature suited style and has helped them go from playing dingy nightclubs to selling out shows in their hometown. Can he help The Beatles break into America?",
      color_hex: "#5151f5",
      secondary_color_hex: null,
      is_active: 0,
      image_url:
        "https://media.discordapp.net/attachments/991561766037356614/1118336866907852820/epstein.png?width=462&height=528",
      electoral_victory_message: "<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>",
      electoral_loss_message: "<h3>Fake News?</h3>",
      no_electoral_majority_message: "<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>",
      description_as_running_mate:
        "Brian Epstein is the manager of both The Beatles and Gerry and The Pacemakers. As manager he is responsible for The Beatles signature suited style and has helped them go from playing dingy nightclubs to selling out shows in their hometown. Can he help The Beatles break into America?",
      candidate_score: 1,
      running_mate: true,
      scrollable: false,
      partner: "0",
    },
  },
];
e.running_mate_json = [
  {
    model: "campaign_trail.running_mate",
    pk: 2001,
    fields: { candidate: 105, running_mate: 108 },
  },
];