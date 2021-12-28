const branchName = document.getElementById('branchName');
const sexShop = document.getElementById('sexShop');
const generatedLinksBlock = document.querySelector('.generated-links');

document.getElementById('generateLinks').addEventListener('click', () => {
	if (branchName.value && sexShop.checked) {
		const generatedLinks = `<span>Pigu.lt:</span>
		<a href="http://${branchName.value}.f-dev.pstage.eu/lt/" target="_blank">http://${branchName.value}.f-dev.pstage.eu/lt/</a><br>
		<a href="http://${branchName.value}.m-dev.pstage.eu/lt/" target="_blank">http://${branchName.value}.m-dev.pstage.eu/lt/</a><br>
		<a href="http://${branchName.value}.n-dev.pstage.eu/lt/" target="_blank">http://${branchName.value}.n-dev.pstage.eu/lt/</a>

		<span style='mso-spacerun:yes'> </span>
		<span>220.lv:</span>
		<a href="http://${branchName.value}.f-dev.2stage.eu/lv/" target="_blank">http://${branchName.value}.f-dev.2stage.eu/lv/</a><br>
		<a href="http://${branchName.value}.m-dev.2stage.eu/lv/" target="_blank">http://${branchName.value}.m-dev.2stage.eu/lv/</a><br>
		<a href="http://${branchName.value}.n-dev.2stage.eu/lv/" target="_blank">http://${branchName.value}.n-dev.2stage.eu/lv/</a>

        <span style='mso-spacerun:yes'> </span> 
		<span>Kaup24.ee:</span>
		<a href="http://${branchName.value}.f-dev.kstage.eu/et/" target="_blank">http://${branchName.value}.f-dev.kstage.eu/et/</a><br>
		<a href="http://${branchName.value}.m-dev.kstage.eu/et/" target="_blank">http://${branchName.value}.m-dev.kstage.eu/et/</a><br>

        <span style='mso-spacerun:yes'> </span> 
		<span>hobbyhall.fi:</span>
		<a href="http://${branchName.value}.f-dev.hhstage.eu/fi/" target="_blank">http://${branchName.value}.f-dev.hhstage.eu/fi/</a><br>
		<a href="http://${branchName.value}.m-dev.hhstage.eu/fi/" target="_blank">http://${branchName.value}.m-dev.hhstage.eu/fi/</a><br>

        <span style='mso-spacerun:yes'> </span> 
		<span>Anttila:</span>
		<a href="http://${branchName.value}.f-dev.anstage.eu/fi/" target="_blank">http://${branchName.value}.f-dev.anstage.eu/fi/</a><br>
		<a href="http://${branchName.value}.m-dev.anstage.eu/fi/" target="_blank">http://${branchName.value}.m-dev.anstage.eu/fi/</a><br>

        <span style='mso-spacerun:yes'> </span> 
		<span>hansapost.ee:</span>
		<a href="http://${branchName.value}.f-dev.hpstage.eu/et/" target="_blank">http://${branchName.value}.f-dev.hpstage.eu/et/</a><br>
		<a href="http://${branchName.value}.m-dev.hpstage.eu/et/" target="_blank">http://${branchName.value}.m-dev.hpstage.eu/et/</a><br>
		`;

		if (generatedLinks) {
			generatedLinksBlock.innerHTML = generatedLinks;
		}
	}

	if (branchName.value && !sexShop.checked) {
		const generatedLinks = `<span>Pigu.lt:</span>
		<a href="http://${branchName.value}.f-dev.pstage.eu/lt/" target="_blank">http://${branchName.value}.f-dev.pstage.eu/lt/</a><br>
		<a href="http://${branchName.value}.m-dev.pstage.eu/lt/" target="_blank">http://${branchName.value}.m-dev.pstage.eu/lt/</a>

		<span style='mso-spacerun:yes'> </span>
		<span>220.lv:</span>
		<a href="http://${branchName.value}.f-dev.2stage.eu/lv/" target="_blank">http://${branchName.value}.f-dev.2stage.eu/lv/</a><br>
		<a href="http://${branchName.value}.m-dev.2stage.eu/lv/" target="_blank">http://${branchName.value}.m-dev.2stage.eu/lv/</a>

		<span style='mso-spacerun:yes'> </span> 
		<span>Kaup24.ee:</span>
		<a href="http://${branchName.value}.f-dev.kstage.eu/et/" target="_blank">http://${branchName.value}.f-dev.kstage.eu/et/</a><br>
		<a href="http://${branchName.value}.m-dev.kstage.eu/et/" target="_blank">http://${branchName.value}.m-dev.kstage.eu/et/</a>

        <span style='mso-spacerun:yes'> </span> 
		<span>hobbyhall.fi:</span>
		<a href="http://${branchName.value}.f-dev.hhstage.eu/fi/" target="_blank">http://${branchName.value}.f-dev.hhstage.eu/fi/</a><br>
		<a href="http://${branchName.value}.m-dev.hhstage.eu/fi/" target="_blank">http://${branchName.value}.m-dev.hhstage.eu/fi/</a><br>

        <span style='mso-spacerun:yes'> </span> 
		<span>Anttila:</span>
		<a href="http://${branchName.value}.f-dev.anstage.eu/fi/" target="_blank">http://${branchName.value}.f-dev.anstage.eu/fi/</a><br>
		<a href="http://${branchName.value}.m-dev.anstage.eu/fi/" target="_blank">http://${branchName.value}.m-dev.anstage.eu/fi/</a><br>

        <span style='mso-spacerun:yes'> </span> 
		<span>hansapost.ee:</span>
		<a href="http://${branchName.value}.f-dev.hpstage.eu/et/" target="_blank">http://${branchName.value}.f-dev.hpstage.eu/et/</a><br>
		<a href="http://${branchName.value}.m-dev.hpstage.eu/et/" target="_blank">http://${branchName.value}.m-dev.hpstage.eu/et/</a><br>
		`;

		if (generatedLinks) {
			generatedLinksBlock.innerHTML = generatedLinks;
		}
	}

});