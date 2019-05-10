function searchMovies() {
    $('#movie-list').html(`
	  <div class="d-flex justify-content-center">
		<div class="spinner-border text-danger" role="status">
			<span class="sr-only">Loading...</span>
		</div>
	  </div>
		`);
    $.ajax({
        url: 'http://smk-smeatdkosgoro2pdg.sch.id/lulusapisemen/lulus.php',
        type: 'get',
        dataType: 'json',
		//responseType:'application/json',
        data: {
            'id' : $('#search-input').val()
        },
        success: function(result){
				console.log(result);

			if(result.status == "sukses-"){
                let movies = result.data;
                $.each(movies, function(i, data){
					console.log(result.status);					
						$('#movie-list').html(`
						    <div class="row mt-3 justify-content-center">
								<table border=0 width=100%>
									<tr><td>No. Ujian </td><td>:<b> ` + data.no + `</td></tr>
									<tr><td>Nama Siswa </td><td>:<b> ` + data.nama + `</td></tr>
									<tr><td>Sekolah Asal </td><td>:<b> ` + data.sekolah + `</td></tr>
								</table><br><br><p><p>
								<table width=100%>
									<tr><td><h4><center>&nbsp;</h4></td></tr>
								</table>
								<table width=100%>
									<tr><td><h4><b><font color=red><center>Harap Selesaikan Adm. Keuangan Anda !!</h4></td></tr>
								</table>
							</div>
                    `) 
                });

                $('#search-input').val('');

            }


            if(result.status == "sukses"){
                let movies = result.data;
                $.each(movies, function(i, data){
					console.log(result.status);
					if(data.ket == "LULUS") {
						$('#movie-list').html(`
						    <div class="row mt-3 justify-content-center">
								<table border=0 width=100%>
									<tr><td>No. Ujian </td><td>:<b> ` + data.no + `</td></tr>
									<tr><td>Nama Siswa </td><td>:<b> ` + data.nama + `</td></tr>
									<tr><td>Sekolah Asal </td><td>:<b> ` + data.sekolah + `</td></tr>
								</table><br><br><p><p>
								<table width=100%>
									<tr><td><h4><center>&nbsp;</h4></td></tr>
								</table>
								<table width=100%>
									<tr><td><h4><center>Anda Dinyatakan :</h4></td></tr>
									<tr><td><h3><b><font color=blue><center>` + data.ket + `</h3></td></tr>
								</table>
							</div>
                    `) }
					if(data.ket == "TIDAK LULUS") {
						$('#movie-list').html(`
						    <div class="row mt-3 justify-content-center">
								<table border=0 width=100%>
									<tr><td>No. Ujian </td><td>:<b> ` + data.no + `</td></tr>
									<tr><td>Nama Siswa </td><td>:<b> ` + data.nama + `</td></tr>
									<tr><td>Sekolah Asal </td><td>:<b> ` + data.sekolah + `</td></tr>
								</table><br><br><p><p>
								<table width=100%>
									<tr><td><h4><center>&nbsp;</h4></td></tr>
								</table>
								<table width=100%>
									<tr><td><h4><center>Anda Dinyatakan :</h4></td></tr>
									<tr><td><h3><b><font color=red><center>` + data.ket + `</h3></td></tr>
								</table>
							</div>
                    `) }
                });

                $('#search-input').val('');

            }
            if(result.status == "gagal"){
                $('#movie-list').html(`
                    <div class="col">
                        <h3 class="text-center"><font color=red>Data Tidak Ditemukan</font></h3>
                    </div>
                `)
            }
			if(result.status == "tunggu"){
                $('#movie-list').html(`
                    <div class="col">
                        <h3 class="text-center"><font color=red>Belum Jadwal Pengumuman Kelulusan</font></h3>
                    </div>
                `)
            }
        }
    });
}

function search1() {
    $('#movie-list').html('saya');
}

$('#search-button').on('click', function(){
	//search1(); 
    searchMovies();    
});

$('#search-input').on('keyup', function (e){
    if(e.keyCode === 13)
    {
        searchMovies();
    }
});

