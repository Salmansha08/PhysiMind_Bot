const { Telegraf } = require('telegraf');
const bot = new Telegraf("5998634761:AAFQnoqmcbouLkBZQGaqQfjM_GV5fDJqb-c");

//Commands Method
//Memulai Percakapan menggunakan /start
bot.start((ctx) => {
    ctx.reply("Hallo " + ctx.from.first_name + ", Selamat datang di PhysiMind. Apakah ada yang bisa saya bantu?");
    ctx.reply("Saya memiliki Beberapa Jenis Kurikulum yang dapat anda pilih diantaranya:"
    + "\n" 
    + "1. Rentjana Pelajaran 1947 /1947"
    + "\n"
    + "2. Rentjana Pelajaran Terurai 1952 /1952"
    + "\n"
    + "3. Rentjana Pendidikan 1964 /1964"
    + "\n"
    + "4. Kurikulum 1968 /1968"
    + "\n"
    + "5. Kurikulum 1975 /1975"
    + "\n"
    + "6. Kurikulum 1975 yang disempurnakan /1984"
    + "\n"
    + "7. Kurikulum 1994 dan Suplemen Kurikulum 1999 /1999"
    + "\n"
    + "8. KBK 2004 /2004"
    + "\n"
    + "9. KTSP 2006 /2006"
    + "\n"
    + "10. Kurtilas 2013 /2013"
    + "\n"
    + "11. Kurikulum Merdeka 2022 /2022")
    //+ ctx.updateType[0]
    //console.log(ctx);
    console.log(ctx.message);
})

//Kurikulum tidak tersedia
bot.command(["1947", "1952", "1964", "1968", "1975", "1984", "1999", "2004", "2006", "2022"], (ctx) => {
    ctx.reply("Mohon maaf, untuk saat ini pilihan kurikulum belum tersedia."
    + "\n\n"
    + "Rekomendasi Kurikulum 2013 /2013")
})

// Untuk Jenjang pada Kurikulum 2013
bot.command("2013", (ctx) => {
    ctx.reply("Pilih Jenjang untuk Kurikulum 2013:"
    + "\n"
    + "1. PAUD /PAUD"
    + "\n"
    + "2. SD /SD"
    + "\n"
    + "3. SMP /SMP"
    + "\n"
    + "7. SMA /SMA"
    + "\n")
    console.log(ctx.message);
})

//Jenjang Tidak Tersedia
bot.command(["PAUD", "SD", "SMA"], (ctx) => {
    ctx.reply("Mohon maaf, untuk saat ini pilihan Jenjang belum tersedia."
    + "\n\n"
    + "Coba Jenjang SMP /SMP")
})

// Untuk Kelas pada Jenjang SMP Kurikulum 2013
bot.command("SMP", (ctx) => {
    ctx.reply("Pilih Kelas SMP untuk Kurikulum 2013:"
    + "\n"
    + "1. Kelas 7 /kelas7"
    + "\n"
    + "2. Kelas 8 /kelas8"
    + "\n"
    + "3. Kelas 9 /kelas9")
    console.log(ctx.message);
})

// untuk Kelas 8 pada Jenjang SMP
bot.command("kelas8", (ctx) => {
    ctx.reply("Berikut daftar Materi Fisika Kurikulum 2013:"
    + "\n\n"
    + "1. Gaya dan Percepatan"
    + "\n"
    + "2. Tekanan"
    + "\n"
    + "3. Energi dan Usaha"
    + "\n"
    + "4. Pesawat Sederhana"
    + "\n"
    + "5. Getaran dan Gelombang /GetarandanGelombang"
    + "\n"
    + "6. Bunyi dan Perambatannya"
    + "\n"
    + "7. Cahaya dan Alat Optik")
    console.log(ctx.message);
})

// untuk Kelas 9 pada Jenjang SMP
bot.command("kelas9", (ctx) => {
    ctx.reply("Berikut daftar Materi Fisika Kurikulum 2013:"
    + "\n\n"
    + "1. Listrik Statis /ListrikStatis"
    + "\n"
    + "2. Listrik Dinamis"
    + "\n"
    + "3. Sumber Arus Listrik"
    + "\n"
    + "4. Energi dan Daya Listrik"
    + "\n"
    + "5. Pengaruh Magnet"
    + "\n"
    + "6. Induksi Elektromagnetik")
    console.log(ctx.message);
})

//Kelas Tidak Tersedia
bot.command(["kelasPG", "kelasA", "kelasB", "kelas1", "kelas2", "kelas3", "kelas4", "kelas5", "kelas6", "kelas7", "kelas10", "kelas11", "kelas12"], (ctx) => {
    ctx.reply("Mohon maaf, untuk saat ini pilihan Jenjang belum tersedia."
    + "\n\n"
    + "Coba SMP Kelas 8 /kelas8 atau SMP Kelas 9 /kelas9")
})

//untuk Command /GetarandanGelombang
bot.command(["GetarandanGelombang", "getarandangelombang"], (ctx) => {
    ctx.reply("[GETARAN DAN GELOMBANG]" 
    + "\n\n"
    + "Getaran adalah gerak yang terjadi secara bolak-balik di sekitar kesetimbangan. Syarat terjadinya getaran ialah benda mengalami kondisi diam apabila tidak menerima gaya gerak. Selain itu, jarak simpangan terjauh yang timbul secara bolak-balik akibat getaran, selalu sama bila diukur dari titik tengah"
    + "\n"
    + "Gelombang adalah getaran yang merambat."
    + "\n\n"
    + "Berikut Link untu mengakses file Buku:"
    + "\n"
    + "1. https://drive.google.com/file/d/15JiES9Jk22SvDYjM0tCX9K7Cf4ZRZcv6/view?usp=sharing"
    + "\n"
    + "2. https://drive.google.com/file/d/1R6YCej-Jv3FD_5vALQ-o2YbGVXQ5e6Xj/view?usp=sharing"
    + "\n\n"
    + "Berikut Video materi yang bisa anda lihat:"
    + "\n"
    + "https://drive.google.com/file/d/1DLjiIFU5ecXNwdhqw9OqgLBYWH-8pnwW/view?usp=sharing"
    + "\n\n"
    + "Anda juga dapat melakukan Simulasi pada link berikut:"
    + "\n"
    + "1. https://phet.colorado.edu/sims/html/pendulum-lab/latest/pendulum-lab_en.html"
    + "\n"
    + "2. https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_en.html"
    )
    console.log(ctx.message);
})

//untuk Command /ListrikStatis
bot.command(["ListrikStatis", "listrikstatis","Listrikstatis"], (ctx) => {
    ctx.reply("[LISTRIK STATIS]" 
    + "\n\n"
    + "Listrik statis adalah ketidakseimbangan muatan listrik dalam atau pada permukaan benda. Muatan listrik tetap ada sampai benda kehilangannya dengan cara sebuah arus listrik melepaskan muatan listrik. Listrik statis kontras dengan arus listrik, yang mengalir melalui kabel atau konduktor lainnya dan mentransmisikan listrik. Sebuah muatan listrik statis dibuat setiap kali dua permukaan terhubung dan terpisah, dan setidaknya salah satu permukaan memiliki resistensi yang tinggi terhadap arus listrik (dan karena itu adalah isolator listrik). Efek listrik statis yang akrab bagi kebanyakan orang karena orang dapat merasakan, mendengar, dan bahkan melihat percikan sebagai kelebihan muatan dinetralkan ketika dibawa dekat dengan konduktor listrik yang besar (misalnya, dialirkan ke tanah)"
    + "\n\n"
    + "Berikut Link untu mengakses file Buku:"
    + "\n"
    + "1. https://drive.google.com/file/d/1Xoe6RhUlVf0i-EDrq6ls6sTk1R4jJVhC/view?usp=sharing"
    + "\n"
    + "2. https://drive.google.com/file/d/1QpA_3y4Mlb_h8HQiY2c04A3vcHC6OubD/view?usp=sharing"
    + "\n\n"
    + "Berikut Video materi yang bisa anda lihat:"
    + "\n"
    + "https://drive.google.com/file/d/1TxK7JKmGBmtKk1-gcxSHl1GXOxvjUnbl/view?usp=sharing"
    + "\n\n"
    + "Anda juga dapat melakukan Simulasi pada link berikut:"
    + "\n"
    + "https://phet.colorado.edu/sims/html/balloons-and-static-electricity/latest/balloons-and-static-electricity_en.html"
    )
    console.log(ctx.message);
})














//-------------------------------------------//
/*
Kami memiliki beberapa materi fisika diantaranya:" + "\n"
    + "1. Listrik Statis /ListrikStatis \n"
    + "2. Getaran dan Gelombang /GetarandanGelombang"
*/
bot.help((ctx) => {
    ctx.reply("Saya dapat memberikan anda materi pembelajaran mengenai Fisika")
})

bot.settings((ctx) => {
    ctx.reply("Anda ingin melakukan pengaturan apa?")
})

bot.command(["test", "Test"], (ctx) => {
    ctx.reply("Hello World!")
})

//Hears Method
bot.hears("cat", (ctx) => {
    ctx.reply("Meong");
})

bot.on("sticker", (ctx) => {
    ctx.reply('Jangan kirim Sticker, Saya tidak bisa menjawab sticker anda')
});

//Other Method
bot.mention((ctx) => {
    ctx.reply('Tidak boleh tag oranglain ya')
})

bot.phone((ctx) => {
    ctx.reply('Jangan Masukan Nomor Telepon pribadi anda')
})
/*
bot.hastag((ctx) => {
    ctx.reply('Jangan Masukan Nomor Telepon pribadi anda')
})
*/
bot.launch();