function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5fPmgILLaJr":
        Script1();
        break;
      case "5VeSEJOzoxg":
        Script2();
        break;
      case "6F0nPYk9AdE":
        Script3();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwhaztDWHKcVUyunI3sAMuTXBMk6VHey2OM6LWPg36yehR6s3qjqOncnR0tMa9RLZf7/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v1q1attempts:player.GetVar("v1q1attempts"),v1q1answeredcorrect:player.GetVar("v1q1answeredcorrect")})
	}
	)
}

function Script2()
{
  const url="https://script.google.com/macros/s/AKfycbwhaztDWHKcVUyunI3sAMuTXBMk6VHey2OM6LWPg36yehR6s3qjqOncnR0tMa9RLZf7/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v1q2attempts:player.GetVar("v1q2attempts"),v1q2answeredcorrect:player.GetVar("v1q2answeredcorrect")})
	}
	)
}

function Script3()
{
  const url="https://script.google.com/macros/s/AKfycbwhaztDWHKcVUyunI3sAMuTXBMk6VHey2OM6LWPg36yehR6s3qjqOncnR0tMa9RLZf7/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v1q3attempts:player.GetVar("v1q3attempts"),v1q3answeredcorrect:player.GetVar("v1q3answeredcorrect")})
	}
	)
}

