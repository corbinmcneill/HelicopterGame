#pragma strict

var initialHealth : int = 100;
var health : float;
var explosionPosition : Transform;
var explosion1 : GameObject;
var explosion2 : GameObject;
private var dead:boolean = false;

function Start () {
	health = initialHealth;
	if (!explosionPosition) {
		explosionPosition = transform;
	}
}

function Update () {
	if (!dead && health <= 0) {
		dead = true;
		Dead();
	}
}


function Dead () {
	PlayerPrefs.SetInt("Money",PlayerPrefs.GetInt("Money",0)+initialHealth);
	
	yield WaitForSeconds(0.2);
	Instantiate(explosion1, explosionPosition.position, transform.rotation);
	yield WaitForSeconds(0.8);
	Instantiate(explosion2, explosionPosition.position, transform.rotation);
	
	if (transform.Find("TurretBase")) {
		transform.Find("TurretBase").parent = null;
	}
	Destroy(gameObject);
	GameObject.Find("ControlHub").GetComponent(GUIHandler).enemiesKilled++;
	GameObject.Find("ControlHub").GetComponent(GUIHandler).enemiesLeft--;
}