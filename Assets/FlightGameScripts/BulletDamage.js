#pragma strict

var bulletDamage : float = .4 * PlayerPrefs.GetFloat("MachineGunDamage",1);

function OnCollisionEnter (myCollision:Collision) {
	if (myCollision.gameObject.GetComponent(EnemyHealth)) {
		myCollision.gameObject.GetComponent(EnemyHealth).health -= bulletDamage;
	} else if (myCollision.gameObject.GetComponent(BigEnemyHealth)) {
		myCollision.gameObject.GetComponent(BigEnemyHealth).health -= bulletDamage;
	}
}

// attach to bullet prefab 