export const EXPANSION = {
  "es": {
    "copy": {
      "label": "Español",
      "tag": "es",
      "home": "calculadoras internacionales",
      "subtitle": "Cálculos prácticos para fechas, dinero y decisiones cotidianas. Elija una calculadora y vea la fórmula detrás de la respuesta.",
      "choose": "Elige una calculadora",
      "calculate": "calcular",
      "results": "Resultados",
      "inputs": "Tus aportes",
      "how": "como funciona",
      "example": "Ejemplo resuelto",
      "note": "Importante saber",
      "related": "Explora otras calculadoras",
      "lang": "Idioma",
      "currency": "Moneda",
      "start": "Fecha de inicio",
      "end": "Fecha de finalización",
      "included": "Incluir la fecha de inicio",
      "invalid": "Ingrese valores válidos para ver un resultado.",
      "back": "Todas las calculadoras",
      "disclaimer": "Estimaciones ilustrativas. Consulte los términos oficiales o específicos del proveedor antes de tomar decisiones financieras.",
      "today": "hoy",
      "source": "Calculadoras coreanas originales",
      "indexIntro": "Estas herramientas funcionan en todos los países. Seleccione su moneda y verifique si su proveedor aplica impuestos o tarifas adicionales.",
      "categories": {
        "length": "Longitud",
        "weight": "Peso",
        "area": "Área",
        "volume": "Volumen",
        "temperature": "Temperatura",
        "data": "Almacenamiento de datos"
      },
      "tools": {
        "fee": {
          "title": "Calculadora de comisiones y cobro neto",
          "description": "Encuentre la tarifa, el pago neto y el precio necesarios para recibir su monto objetivo después del porcentaje y las tarifas fijas.",
          "intro": "Compare cuánto cobra una plataforma de pago por una venta y calcule el cargo requerido para alcanzar el monto neto deseado.",
          "formula": "Pago neto = cargo × (1 − tasa de tarifa) − tarifa fija. Cargo requerido = (objetivo neto + tarifa fija) ÷ (1 - tasa de tarifa).",
          "example": "Con un cargo de US$ 100 con una tarifa porcentual del 3 % y una tarifa fija de US$ 0,30, el pago neto es de US$ 96,70. Para recibir US$ 100 netos, cargue alrededor de US$ 103,40.",
          "note": "Los procesadores de pagos pueden aplicar impuestos adicionales, tarifas transfronterizas, reembolsos y reglas de redondeo.",
          "fields": [
            "Importe cobrado o neto deseado",
            "Comisión porcentual (%)",
            "Comisión fija"
          ],
          "modes": [
            "Restar comisiones",
            "Calcular cobro desde el neto"
          ],
          "out": [
            "Comisión total",
            "Importe neto recibido",
            "Importe que debes cobrar"
          ]
        },
        "discount": {
          "title": "Calculadora de descuentos acumulados",
          "description": "Encuentre el precio final y el descuento efectivo después de dos ofertas o cupones secuenciales.",
          "intro": "Un descuento del 20% seguido de otro 10% no es un descuento del 30%. Vea los ahorros reales después de ambas ofertas.",
          "formula": "Precio final = precio original × (1 − primer descuento) × (1 − segundo descuento).",
          "example": "Un artículo de US$ 100 con un descuento del 20% y luego del 10% cuesta US$ 72. Eso es un descuento total del 28%.",
          "note": "Los impuestos, el envío, las exclusiones y el orden de operaciones pueden cambiar el precio de pago.",
          "fields": [
            "Precio original",
            "Primer descuento (%)",
            "Segundo descuento (%)"
          ],
          "out": [
            "precio final",
            "Ahorro total",
            "Descuento efectivo"
          ]
        },
        "days": {
          "title": "Calculadora de días entre fechas",
          "description": "Cuente los días entre dos fechas, con la opción de incluir el primer día.",
          "intro": "Calcule los días naturales transcurridos para cumpleaños, aniversarios, fechas límite o hitos del proyecto.",
          "formula": "Resta las dos fechas del calendario en UTC para evitar transiciones de horario de verano. Incluir el primer día suma un día para un rango ascendente.",
          "example": "Del 1 de enero al 11 de enero son 10 días transcurridos. Si el 1 de enero cuenta como día 1, la cuenta es 11.",
          "note": "Este es un recuento de días calendario, no un cálculo de días hábiles ni de feriados nacionales.",
          "fields": [
            "Fecha de inicio",
            "Fecha de finalización"
          ],
          "out": [
            "Días transcurridos",
            "Semanas y dias"
          ]
        },
        "stock-average": {
          "title": "Calculadora de precio medio de acciones",
          "description": "Calcule el nuevo costo promedio ponderado de sus acciones después de comprar más acciones.",
          "intro": "Vea cómo agregar acciones a un precio de compra diferente cambia el costo promedio por acción.",
          "formula": "Nuevo promedio = (acciones actuales × promedio actual + acciones nuevas × precio de compra) ÷ acciones totales.",
          "example": "100 acciones a 50 dólares más 100 acciones a 40 dólares dan un promedio de 45 dólares en 200 acciones.",
          "note": "Las tarifas comerciales, los impuestos, los tipos de cambio y las ventas realizadas no están incluidos. Este no es un consejo de inversión.",
          "fields": [
            "Acciones actuales",
            "Precio medio actual",
            "Acciones adicionales",
            "nuevo precio de compra"
          ],
          "out": [
            "Nuevo coste medio de acción",
            "Acciones totales",
            "Base del costo total"
          ]
        },
        "compound": {
          "title": "Calculadora de interés compuesto",
          "description": "Estima el crecimiento a largo plazo con un depósito inicial, adiciones mensuales y retornos anuales.",
          "intro": "Proyecte cómo podrían crecer los ahorros o las inversiones cuando los rendimientos se acumulen y las contribuciones se agreguen mensualmente.",
          "formula": "Tasa efectiva mensual = (1 + rendimiento anual)^(1/12) − 1. Aplique el crecimiento y luego agregue cada contribución mensual.",
          "example": "Comience con US$ 1.000, agregue US$ 100 mensuales y suponga una tasa anual del 5% durante 10 años para explorar el saldo estimado.",
          "note": "Los rendimientos constantes son hipotéticos. Los rendimientos reales de las inversiones, los impuestos y las tarifas varían; Las aportaciones mensuales se realizan al final del mes.",
          "fields": [
            "Saldo inicial",
            "Contribución mensual",
            "Rentabilidad anual (%)",
            "Años"
          ],
          "out": [
            "Saldo estimado",
            "Contribuciones totales",
            "Crecimiento estimado"
          ]
        },
        "unit-converter": {
          "title": "Conversor de unidades",
          "description": "Convierta unidades de longitud, masa, área, volumen, temperatura y almacenamiento digital.",
          "intro": "Cambie entre medidas métricas e imperiales sin cambiar de página.",
          "formula": "Para unidades estándar, convierta a una unidad base común antes de convertir al destino. La temperatura utiliza una compensación y una escala.",
          "example": "1 milla equivale a 1,609344 kilómetros y 100 °F equivale aproximadamente a 37,78 °C.",
          "note": "Se utilizan galones líquidos estadounidenses y tazas estadounidenses; Las unidades de almacenamiento incluyen kB/MB/GB decimal y KiB/MiB/GiB binario.",
          "fields": [
            "Valor",
            "De",
            "a"
          ],
          "out": [
            "Valor convertido"
          ]
        },
        "age": {
          "title": "Calculadora de edad",
          "description": "Calcule la edad exacta en años y días completos desde el nacimiento utilizando una fecha de nacimiento.",
          "intro": "Encuentre los años cumplidos de edad al día de hoy, más el número de días calendario transcurridos desde el nacimiento.",
          "formula": "Años completos = año de referencia - año de nacimiento, menos uno cuando el cumpleaños de este año aún no ha ocurrido.",
          "example": "Alguien nacido el 31 de diciembre de 2000 todavía tiene 25 años el 30 de diciembre de 2026 y cumple 26 años al día siguiente.",
          "note": "La fecha de referencia es la fecha de su calendario local. Las definiciones de edad legal pueden diferir según el país y el propósito.",
          "fields": [
            "fecha de nacimiento"
          ],
          "out": [
            "Edad en años completos",
            "Días desde el nacimiento"
          ]
        }
      }
    }
  },
  "pt-br": {
    "copy": {
      "label": "Português (Brasil)",
      "tag": "pt-BR",
      "home": "Calculadoras internacionais",
      "subtitle": "Cálculos práticos para datas, dinheiro e decisões do dia a dia. Escolha uma calculadora e veja a fórmula por trás da resposta.",
      "choose": "Escolha uma calculadora",
      "calculate": "Calcular",
      "results": "Resultados",
      "inputs": "Suas entradas",
      "how": "Como funciona",
      "example": "Exemplo trabalhado",
      "note": "Importante saber",
      "related": "Explore outras calculadoras",
      "lang": "Idioma",
      "currency": "Moeda",
      "start": "Data de início",
      "end": "Data de término",
      "included": "Incluir a data de início",
      "invalid": "Insira valores válidos para ver um resultado.",
      "back": "Todas as calculadoras",
      "disclaimer": "Estimativas ilustrativas. Verifique os termos oficiais ou específicos do fornecedor antes de tomar decisões financeiras.",
      "today": "Hoje",
      "source": "Calculadoras coreanas originais",
      "indexIntro": "Essas ferramentas funcionam em todos os países. Selecione sua moeda e verifique se seu provedor aplica impostos ou taxas extras.",
      "categories": {
        "length": "Comprimento",
        "weight": "Peso",
        "area": "Área",
        "volume": "Volume",
        "temperature": "Temperatura",
        "data": "Armazenamento de dados"
      },
      "tools": {
        "fee": {
          "title": "Calculadora de taxas e valor líquido",
          "description": "Encontre a taxa, o pagamento líquido e o preço necessário para receber o valor desejado após taxas percentuais e fixas.",
          "intro": "Compare quanto uma plataforma de pagamento tira de uma venda e calcule a cobrança necessária para atingir o valor líquido desejado.",
          "formula": "Pagamento líquido = cobrança × (1 − taxa) − taxa fixa. Cobrança obrigatória = (alvo líquido + taxa fixa) ÷ (1 - taxa de taxa).",
          "example": "Com uma cobrança de R$ 100 com uma taxa percentual de 3% e uma taxa fixa de R$ 0,30, o pagamento líquido é de R$ 96,70. Para receber R$ 100 líquidos, cobre cerca de R$ 103,40.",
          "note": "Os processadores de pagamento podem aplicar impostos adicionais, taxas transfronteiriças, reembolsos e regras de arredondamento.",
          "fields": [
            "Valor cobrado ou líquido desejado",
            "Taxa percentual (%)",
            "Taxa fixa"
          ],
          "modes": [
            "Descontar taxas",
            "Calcular cobrança pelo líquido"
          ],
          "out": [
            "Total de taxas",
            "Valor líquido recebido",
            "Valor a cobrar"
          ]
        },
        "discount": {
          "title": "Calculadora de descontos sucessivos",
          "description": "Encontre o preço final e o desconto efetivo após duas ofertas ou cupons sequenciais.",
          "intro": "Um desconto de 20% seguido de outros 10% não é um desconto de 30%. Veja a economia real após ambas as ofertas.",
          "formula": "Preço final = preço original × (1 − primeiro desconto) × (1 − segundo desconto).",
          "example": "Um item de R$ 100 com desconto de 20% e depois 10% custa R$ 72. Isso é um desconto total de 28%.",
          "note": "Impostos, frete, exclusões e ordem de operações podem alterar o preço do checkout.",
          "fields": [
            "Preço original",
            "Primeiro desconto (%)",
            "Segundo desconto (%)"
          ],
          "out": [
            "Preço final",
            "Economia total",
            "Desconto efetivo"
          ]
        },
        "days": {
          "title": "Calculadora de dias entre datas",
          "description": "Conte os dias entre duas datas, podendo incluir o primeiro dia.",
          "intro": "Calcule os dias decorridos para aniversários, datas comemorativas, prazos ou marcos do projeto.",
          "formula": "Subtraia as duas datas do calendário em UTC para evitar transições para o horário de verão. Incluir o primeiro dia adiciona um dia para uma faixa ascendente.",
          "example": "De 1º a 11 de janeiro são 10 dias decorridos. Se 1º de janeiro contar como dia 1, a contagem será 11.",
          "note": "Esta é uma contagem de dias corridos, não um cálculo de dias úteis ou feriados nacionais.",
          "fields": [
            "Data de início",
            "Data de término"
          ],
          "out": [
            "Dias decorridos",
            "Semanas e dias"
          ]
        },
        "stock-average": {
          "title": "Calculadora de preço médio de ações",
          "description": "Calcule o novo custo médio ponderado das ações depois de comprar mais ações.",
          "intro": "Veja como adicionar ações com um preço de compra diferente altera o custo médio por ação.",
          "formula": "Nova média = (ações atuais × média atual + novas ações × preço de compra) ÷ total de ações.",
          "example": "100 ações a R$ 50 mais 100 ações a R$ 40 dão uma média de R$ 45 em 200 ações.",
          "note": "Taxas de negociação, impostos, taxas de câmbio e vendas realizadas não estão incluídas. Este não é um conselho de investimento.",
          "fields": [
            "Ações atuais",
            "Preço médio atual",
            "Ações adicionais",
            "Novo preço de compra"
          ],
          "out": [
            "Novo custo médio de ações",
            "Total de ações",
            "Base de custo total"
          ]
        },
        "compound": {
          "title": "Calculadora de juros compostos",
          "description": "Estime o crescimento a longo prazo com um depósito inicial, acréscimos mensais e retornos anuais.",
          "intro": "Projete como as poupanças ou os investimentos podem crescer quando os retornos compostos e as contribuições são adicionados mensalmente.",
          "formula": "Taxa efetiva mensal = (1 + retorno anual)^(1/12) − 1. Aplique o crescimento e, em seguida, adicione cada contribuição mensal.",
          "example": "Comece com R$ 1.000, adicione R$ 100 mensais e assuma uma taxa anual de 5% por 10 anos para explorar o saldo estimado.",
          "note": "Os retornos constantes são hipotéticos. Os retornos reais do investimento, impostos e taxas variam; as contribuições mensais são feitas no final do mês.",
          "fields": [
            "Saldo inicial",
            "Contribuição mensal",
            "Retorno anual (%)",
            "Anos"
          ],
          "out": [
            "Saldo estimado",
            "Contribuições totais",
            "Crescimento estimado"
          ]
        },
        "unit-converter": {
          "title": "Conversor de unidades",
          "description": "Converta unidades de comprimento, massa, área, volume, temperatura e armazenamento digital.",
          "intro": "Alterne entre medidas métricas e imperiais sem alterar as páginas.",
          "formula": "Para unidades padrão, converta para uma unidade base comum antes de converter para o destino. A temperatura usa um deslocamento e também uma escala.",
          "example": "1 milha equivale a 1,609344 quilômetros e 100°F equivale a aproximadamente 37,78°C.",
          "note": "São usados ​​galões líquidos e copos americanos; unidades de armazenamento incluem kB/MB/GB decimais e KiB/MiB/GiB binários.",
          "fields": [
            "Valor",
            "De",
            "Para"
          ],
          "out": [
            "Valor convertido"
          ]
        },
        "age": {
          "title": "Calculadora de idade",
          "description": "Calcule a idade exata em anos e dias completos desde o nascimento usando uma data de nascimento.",
          "intro": "Encontre os anos de idade completos a partir de hoje, mais o número de dias corridos desde o nascimento.",
          "formula": "Anos completos = ano de referência − ano de nascimento, menos um quando o aniversário deste ano ainda não ocorreu.",
          "example": "Alguém nascido em 31 de dezembro de 2000 ainda tem 25 anos em 30 de dezembro de 2026 e completa 26 anos no dia seguinte.",
          "note": "A data de referência é a data do seu calendário local. As definições de idade legal podem variar de acordo com o país e a finalidade.",
          "fields": [
            "Data de nascimento"
          ],
          "out": [
            "Idade em anos completos",
            "Dias desde o nascimento"
          ]
        }
      }
    }
  },
  "id": {
    "copy": {
      "label": "Bahasa Indonesia",
      "tag": "id",
      "home": "Kalkulator internasional",
      "subtitle": "Perhitungan praktis untuk tanggal, uang, dan keputusan sehari-hari. Pilih kalkulator dan lihat rumus di balik jawabannya.",
      "choose": "Pilih kalkulator",
      "calculate": "Hitung",
      "results": "Hasil",
      "inputs": "Masukan Anda",
      "how": "Bagaimana cara kerjanya",
      "example": "Contoh yang berhasil",
      "note": "Penting untuk diketahui",
      "related": "Jelajahi kalkulator lainnya",
      "lang": "Bahasa",
      "currency": "Mata uang",
      "start": "Tanggal mulai",
      "end": "Tanggal akhir",
      "included": "Cantumkan tanggal mulainya",
      "invalid": "Masukkan nilai yang valid untuk melihat hasilnya.",
      "back": "Semua kalkulator",
      "disclaimer": "Perkiraan ilustratif. Periksa persyaratan resmi atau khusus penyedia sebelum membuat keputusan keuangan.",
      "today": "Hari ini",
      "source": "Kalkulator asli Korea",
      "indexIntro": "Alat-alat ini berfungsi di berbagai negara. Pilih mata uang Anda dan periksa apakah penyedia Anda menerapkan pajak atau biaya tambahan.",
      "categories": {
        "length": "Panjangnya",
        "weight": "Berat",
        "area": "Daerah",
        "volume": "Volume",
        "temperature": "Suhu",
        "data": "Penyimpanan data"
      },
      "tools": {
        "fee": {
          "title": "Kalkulator biaya dan penerimaan bersih",
          "description": "Temukan biaya, pembayaran bersih, dan harga yang diperlukan untuk menerima jumlah target Anda setelah persentase dan biaya tetap.",
          "intro": "Hitung potongan biaya dari jumlah tagihan, atau cari jumlah tagihan agar penerimaan bersih mencapai target.",
          "formula": "Penerimaan bersih = jumlah tagihan × (1 − tarif biaya) − biaya tetap. Tagihan yang diperlukan = (target bersih + biaya tetap) ÷ (1 − tarif biaya).",
          "example": "Dengan biaya Rp 100 dengan biaya persentase 3% dan biaya tetap Rp 0,30, pembayaran bersihnya adalah Rp 96,70. Untuk menerima Rp 100 bersih, kenakan biaya sekitar Rp 103,40.",
          "note": "Pemroses pembayaran mungkin menerapkan pajak tambahan, biaya lintas batas, pengembalian uang, dan aturan pembulatan.",
          "fields": [
            "Jumlah tagihan atau target penerimaan bersih",
            "Biaya persentase (%)",
            "Biaya tetap"
          ],
          "modes": [
            "Potong biaya",
            "Hitung tagihan dari target bersih"
          ],
          "out": [
            "Total biaya",
            "Penerimaan bersih",
            "Jumlah yang harus ditagih"
          ]
        },
        "discount": {
          "title": "Kalkulator diskon bertingkat",
          "description": "Temukan harga akhir dan diskon efektif setelah dua penawaran atau kupon berurutan.",
          "intro": "Diskon 20% diikuti 10% lagi bukanlah diskon 30%. Lihat penghematan nyata setelah kedua penawaran.",
          "formula": "Harga akhir = harga asli × (1 − diskon pertama) × (1 − diskon kedua).",
          "example": "Item seharga Rp 100 didiskon 20% dan kemudian 10% berharga Rp 72. Itu adalah total diskon 28%.",
          "note": "Pajak, pengiriman, pengecualian, dan urutan pengoperasian dapat mengubah harga checkout.",
          "fields": [
            "Harga asli",
            "Diskon pertama (%)",
            "Diskon kedua (%)"
          ],
          "out": [
            "Harga akhir",
            "Jumlah penghematan",
            "Diskon yang efektif"
          ]
        },
        "days": {
          "title": "Kalkulator selisih hari antara tanggal",
          "description": "Hitung hari di antara dua tanggal, dengan pilihan untuk memasukkan hari pertama.",
          "intro": "Hitung hari kalender yang telah berlalu untuk ulang tahun, hari jadi, tenggat waktu, atau pencapaian proyek.",
          "formula": "Kurangi dua tanggal kalender dalam UTC untuk menghindari transisi musim panas. Termasuk hari pertama menambahkan satu hari untuk rentang menaik.",
          "example": "Dari 1 Januari hingga 11 Januari adalah 10 hari berlalu. Jika tanggal 1 Januari dihitung sebagai hari ke 1 maka hitungannya adalah 11.",
          "note": "Ini adalah penghitungan hari kalender, bukan penghitungan hari kerja atau hari libur nasional.",
          "fields": [
            "Tanggal mulai",
            "Tanggal akhir"
          ],
          "out": [
            "Hari-hari yang telah berlalu",
            "Minggu dan hari"
          ]
        },
        "stock-average": {
          "title": "Kalkulator rata-rata harga saham",
          "description": "Hitung harga saham rata-rata tertimbang baru Anda setelah membeli lebih banyak saham.",
          "intro": "Lihat bagaimana menambahkan saham pada harga pembelian yang berbeda mengubah biaya rata-rata per saham.",
          "formula": "Rata-rata baru = (saham saat ini × rata-rata saat ini + saham baru × harga beli) total saham.",
          "example": "100 saham seharga Rp 50 ditambah 100 saham seharga Rp 40 menghasilkan rata-rata Rp 45 untuk 200 saham.",
          "note": "Biaya perdagangan, pajak, kurs FX, dan realisasi penjualan tidak termasuk. Ini bukan nasihat investasi.",
          "fields": [
            "Saham saat ini",
            "Harga rata-rata saat ini",
            "Saham tambahan",
            "Harga pembelian baru"
          ],
          "out": [
            "Biaya saham rata-rata baru",
            "Jumlah saham",
            "Dasar biaya total"
          ]
        },
        "compound": {
          "title": "Kalkulator bunga majemuk",
          "description": "Perkirakan pertumbuhan jangka panjang dengan setoran awal, penambahan bulanan, dan pengembalian tahunan.",
          "intro": "Proyeksikan bagaimana tabungan atau investasi dapat tumbuh ketika imbal hasil bertambah dan kontribusi ditambahkan setiap bulan.",
          "formula": "Tarif efektif bulanan = (1 + pengembalian tahunan)^(1/12) − 1. Terapkan pertumbuhan, lalu tambahkan setiap kontribusi bulanan.",
          "example": "Mulailah dengan Rp 1.000, tambahkan Rp 100 setiap bulan, dan asumsikan tarif tahunan 5% selama 10 tahun untuk memperkirakan perkiraan saldo.",
          "note": "Pengembalian konstan bersifat hipotetis. Hasil investasi riil, pajak dan biaya bervariasi; kontribusi bulanan dilakukan pada akhir bulan.",
          "fields": [
            "Saldo awal",
            "Kontribusi bulanan",
            "Pengembalian tahunan (%)",
            "Bertahun-tahun"
          ],
          "out": [
            "Perkiraan saldo",
            "Total kontribusi",
            "Perkiraan pertumbuhan"
          ]
        },
        "unit-converter": {
          "title": "Konverter satuan",
          "description": "Mengonversi satuan panjang, massa, luas, volume, suhu, dan penyimpanan digital.",
          "intro": "Beralih antara pengukuran metrik dan imperial tanpa mengubah halaman.",
          "formula": "Untuk satuan standar, konversikan ke satuan dasar yang sama sebelum mengkonversi ke tujuan. Suhu menggunakan offset dan juga skala.",
          "example": "1 mil sama dengan 1,609344 kilometer, dan 100°F sama dengan sekitar 37,78°C.",
          "note": "Galon cair AS dan gelas AS digunakan; unit penyimpanan termasuk desimal kB/MB/GB dan biner KiB/MiB/GiB.",
          "fields": [
            "Nilai",
            "Dari",
            "Untuk"
          ],
          "out": [
            "Nilai yang dikonversi"
          ]
        },
        "age": {
          "title": "Kalkulator umur",
          "description": "Hitung usia pasti dalam tahun dan hari penuh sejak lahir menggunakan tanggal lahir.",
          "intro": "Temukan tahun-tahun yang telah selesai pada hari ini, ditambah jumlah hari kalender yang telah berlalu sejak lahir.",
          "formula": "Tahun selesai = tahun referensi − tahun lahir, dikurangi satu bila ulang tahun tahun ini belum terjadi.",
          "example": "Seseorang yang lahir pada tanggal 31 Desember 2000 masih berusia 25 tahun pada tanggal 30 Desember 2026, dan keesokan harinya berulang tahun ke-26.",
          "note": "Tanggal referensi adalah tanggal kalender lokal Anda. Definisi usia legal dapat berbeda menurut negara dan tujuan.",
          "fields": [
            "Tanggal lahir"
          ],
          "out": [
            "Usia dalam tahun penuh",
            "Hari sejak lahir"
          ]
        }
      }
    }
  },
  "hi": {
    "copy": {
      "label": "हिन्दी",
      "tag": "hi",
      "home": "अंतर्राष्ट्रीय कैलकुलेटर",
      "subtitle": "तिथियों, धन और रोजमर्रा के निर्णयों के लिए व्यावहारिक गणना। एक कैलकुलेटर चुनें और उत्तर के पीछे का सूत्र देखें।",
      "choose": "एक कैलकुलेटर चुनें",
      "calculate": "गणना करें",
      "results": "परिणाम",
      "inputs": "आपके इनपुट",
      "how": "यह कैसे काम करता है",
      "example": "काम किया उदाहरण",
      "note": "जानना ज़रूरी है",
      "related": "अन्य कैलकुलेटर खोजें",
      "lang": "भाषा",
      "currency": "मुद्रा",
      "start": "आरंभ तिथि",
      "end": "समाप्ति तिथि",
      "included": "आरंभ तिथि शामिल करें",
      "invalid": "परिणाम देखने के लिए मान्य मान दर्ज करें।",
      "back": "सभी कैलकुलेटर",
      "disclaimer": "उदाहरणात्मक अनुमान. वित्तीय निर्णय लेने से पहले आधिकारिक या प्रदाता-विशिष्ट शर्तों की जाँच करें।",
      "today": "आज",
      "source": "मूल कोरियाई कैलकुलेटर",
      "indexIntro": "ये उपकरण विभिन्न देशों में काम करते हैं। अपनी मुद्रा चुनें और जांचें कि आपका प्रदाता अतिरिक्त कर या शुल्क लागू करता है या नहीं।",
      "categories": {
        "length": "लंबाई",
        "weight": "वज़न",
        "area": "क्षेत्र",
        "volume": "आयतन",
        "temperature": "तापमान",
        "data": "डेटा भंडारण"
      },
      "tools": {
        "fee": {
          "title": "शुल्क और शुद्ध भुगतान कैलकुलेटर",
          "description": "प्रतिशत और निश्चित शुल्क के बाद अपनी लक्षित राशि प्राप्त करने के लिए आवश्यक शुल्क, शुद्ध भुगतान और मूल्य ज्ञात करें।",
          "intro": "भुगतान प्लेटफ़ॉर्म के प्रतिशत और निश्चित शुल्क घटने के बाद मिलने वाली राशि देखें, या तय शुद्ध राशि पाने के लिए आवश्यक वसूली राशि निकालें।",
          "formula": "शुद्ध भुगतान = वसूली राशि × (1 − शुल्क दर) − निश्चित शुल्क। आवश्यक वसूली राशि = (लक्षित शुद्ध राशि + निश्चित शुल्क) ÷ (1 − शुल्क दर)।",
          "example": "3% प्रतिशत शुल्क और ₹ 0.30 निश्चित शुल्क के साथ ₹ 100 शुल्क पर, शुद्ध भुगतान ₹ 96.70 है। ₹ 100 नेट प्राप्त करने के लिए, लगभग ₹ 103.40 का शुल्क लें।",
          "note": "भुगतान प्रोसेसर अतिरिक्त कर, सीमा पार शुल्क, रिफंड और राउंडिंग नियम लागू कर सकते हैं।",
          "fields": [
            "वसूली राशि या वांछित शुद्ध राशि",
            "प्रतिशत शुल्क (%)",
            "निश्चित शुल्क"
          ],
          "modes": [
            "शुल्क घटाएँ",
            "शुद्ध राशि से वसूली राशि निकालें"
          ],
          "out": [
            "कुल शुल्क",
            "प्राप्त शुद्ध राशि",
            "आवश्यक वसूली राशि"
          ]
        },
        "discount": {
          "title": "लगातार छूट कैलकुलेटर",
          "description": "दो क्रमिक ऑफ़र या कूपन के बाद अंतिम कीमत और प्रभावी छूट ज्ञात करें।",
          "intro": "20% की छूट और उसके बाद 10% की छूट 30% की छूट नहीं है। दोनों ऑफ़र के बाद वास्तविक बचत देखें।",
          "formula": "अंतिम कीमत = मूल कीमत × (1 - पहली छूट) × (1 - दूसरी छूट)।",
          "example": "एक ₹ 100 की वस्तु पर 20% छूट दी जाती है और फिर 10% की कीमत ₹ 72 होती है। यानी कुल 28% की छूट.",
          "note": "कर, शिपिंग, बहिष्करण और संचालन का ऑर्डर चेकआउट मूल्य को बदल सकते हैं।",
          "fields": [
            "मूल कीमत",
            "पहली छूट (%)",
            "दूसरी छूट (%)"
          ],
          "out": [
            "अंतिम कीमत",
            "कुल बचत",
            "प्रभावी छूट"
          ]
        },
        "days": {
          "title": "दो तारीखों के बीच दिन कैलकुलेटर",
          "description": "पहले दिन को शामिल करने के विकल्प के साथ, दो तिथियों के बीच के दिनों की गणना करें।",
          "intro": "जन्मदिन, वर्षगाँठ, समय सीमा या परियोजना मील के पत्थर के लिए बीते कैलेंडर दिनों की गणना करें।",
          "formula": "डेलाइट-सेविंग ट्रांज़िशन से बचने के लिए यूटीसी में दो कैलेंडर तिथियां घटाएं। पहले दिन को शामिल करने से आरोही सीमा में एक दिन जुड़ जाता है।",
          "example": "1 जनवरी से 11 जनवरी तक 10 दिन बीत गए। यदि 1 जनवरी को 1 दिन के रूप में गिना जाता है, तो गिनती 11 होती है।",
          "note": "यह एक कैलेंडर-दिन की गणना है, न कि व्यावसायिक-दिन या राष्ट्रीय-अवकाश की गणना।",
          "fields": [
            "आरंभ तिथि",
            "समाप्ति तिथि"
          ],
          "out": [
            "बीते हुए दिन",
            "सप्ताह और दिन"
          ]
        },
        "stock-average": {
          "title": "शेयर की औसत खरीद कीमत कैलकुलेटर",
          "description": "अधिक शेयर खरीदने के बाद अपनी नई भारित-औसत शेयर लागत की गणना करें।",
          "intro": "देखें कि भिन्न खरीद मूल्य पर शेयर जोड़ने से प्रति शेयर औसत लागत कैसे बदल जाती है।",
          "formula": "नया औसत = (वर्तमान शेयर × वर्तमान औसत + नए शेयर × खरीद मूल्य) ÷ कुल शेयर।",
          "example": "₹ 50 पर 100 शेयर और ₹ 40 पर 100 शेयर 200 शेयरों में ₹ 45 का औसत देते हैं।",
          "note": "ट्रेडिंग शुल्क, कर, एफएक्स दरें और वास्तविक बिक्री शामिल नहीं हैं। यह निवेश सलाह नहीं है.",
          "fields": [
            "वर्तमान शेयर",
            "वर्तमान औसत कीमत",
            "अतिरिक्त शेयर",
            "नया खरीद मूल्य"
          ],
          "out": [
            "नई औसत शेयर लागत",
            "कुल शेयर",
            "कुल लागत का आधार"
          ]
        },
        "compound": {
          "title": "चक्रवृद्धि ब्याज कैलकुलेटर",
          "description": "प्रारंभिक जमा, मासिक अतिरिक्त और वार्षिक रिटर्न के साथ दीर्घकालिक वृद्धि का अनुमान लगाएं।",
          "intro": "प्रोजेक्ट करें कि रिटर्न कंपाउंड और योगदान मासिक रूप से जोड़े जाने पर बचत या निवेश कैसे बढ़ सकता है।",
          "formula": "मासिक प्रभावी दर = (1 + वार्षिक रिटर्न)^(1/12) − 1. वृद्धि लागू करें, फिर प्रत्येक मासिक योगदान जोड़ें।",
          "example": "₹ 1,000 से शुरू करें, ₹ 100 मासिक जोड़ें, और अनुमानित शेष राशि का पता लगाने के लिए 10 वर्षों के लिए 5% वार्षिक दर मानें।",
          "note": "लगातार रिटर्न काल्पनिक हैं. वास्तविक निवेश रिटर्न, कर और शुल्क अलग-अलग होते हैं; मासिक योगदान महीने के अंत में किया जाता है।",
          "fields": [
            "आरंभिक संतुलन",
            "मासिक अंशदान",
            "वार्षिक रिटर्न (%)",
            "साल"
          ],
          "out": [
            "अनुमानित शेष",
            "कुल योगदान",
            "अनुमानित वृद्धि"
          ]
        },
        "unit-converter": {
          "title": "इकाई परिवर्तक",
          "description": "लंबाई, द्रव्यमान, क्षेत्रफल, आयतन, तापमान और डिजिटल भंडारण इकाइयों को परिवर्तित करें।",
          "intro": "पृष्ठ बदले बिना मीट्रिक और शाही माप के बीच स्विच करें।",
          "formula": "मानक इकाइयों के लिए, गंतव्य पर परिवर्तित करने से पहले एक सामान्य आधार इकाई में परिवर्तित करें। तापमान ऑफसेट के साथ-साथ एक पैमाने का भी उपयोग करता है।",
          "example": "1 मील 1.609344 किलोमीटर के बराबर है, और 100°F लगभग 37.78°C के बराबर है।",
          "note": "यूएस तरल गैलन और यूएस कप का उपयोग किया जाता है; भंडारण इकाइयों में दशमलव kB/MB/GB और बाइनरी KiB/MiB/GiB शामिल हैं।",
          "fields": [
            "मूल्य",
            "से",
            "को"
          ],
          "out": [
            "परिवर्तित मूल्य"
          ]
        },
        "age": {
          "title": "आयु कैलकुलेटर",
          "description": "जन्म तिथि का उपयोग करके जन्म के बाद से पूरे वर्ष और दिनों में सटीक आयु की गणना करें।",
          "intro": "आज तक आयु के पूर्ण वर्ष और जन्म के बाद से बीते हुए कैलेंडर दिनों की संख्या ज्ञात करें।",
          "formula": "पूर्ण वर्ष = संदर्भ वर्ष - जन्म वर्ष, शून्य से एक वर्ष जब इस वर्ष का जन्मदिन अभी तक नहीं हुआ है।",
          "example": "31 दिसंबर 2000 को जन्मा कोई व्यक्ति 30 दिसंबर 2026 को भी 25 वर्ष का होगा और अगले दिन 26 वर्ष का हो जाएगा।",
          "note": "संदर्भ तिथि आपकी स्थानीय कैलेंडर तिथि है। कानूनी उम्र की परिभाषाएँ देश और उद्देश्य के अनुसार भिन्न हो सकती हैं।",
          "fields": [
            "जन्मतिथि"
          ],
          "out": [
            "आयु पूर्ण वर्षों में",
            "जन्म के बाद से दिन"
          ]
        }
      }
    }
  },
  "fr": {
    "copy": {
      "label": "Français",
      "tag": "fr",
      "home": "Calculatrices internationales",
      "subtitle": "Calculs pratiques pour les dates, l'argent et les décisions quotidiennes. Choisissez une calculatrice et voyez la formule derrière la réponse.",
      "choose": "Choisissez une calculatrice",
      "calculate": "Calculer",
      "results": "Résultats",
      "inputs": "Vos entrées",
      "how": "Comment ça marche",
      "example": "Exemple travaillé",
      "note": "Important à savoir",
      "related": "Explorez d'autres calculatrices",
      "lang": "Langue",
      "currency": "Devise",
      "start": "Date de début",
      "end": "Date de fin",
      "included": "Inclure la date de début",
      "invalid": "Entrez des valeurs valides pour voir un résultat.",
      "back": "Toutes les calculatrices",
      "disclaimer": "Estimations illustratives. Vérifiez les conditions officielles ou spécifiques au fournisseur avant de prendre des décisions financières.",
      "today": "Aujourd'hui",
      "source": "Calculatrices coréennes originales",
      "indexIntro": "Ces outils fonctionnent dans tous les pays. Sélectionnez votre devise et vérifiez si votre fournisseur applique des taxes ou des frais supplémentaires.",
      "categories": {
        "length": "Longueur",
        "weight": "Poids",
        "area": "Zone",
        "volume": "Volume",
        "temperature": "Température",
        "data": "Stockage des données"
      },
      "tools": {
        "fee": {
          "title": "Calculatrice de frais et montant net",
          "description": "Trouvez les frais, le paiement net et le prix nécessaires pour recevoir votre montant cible après pourcentage et frais fixes.",
          "intro": "Comparez le montant qu'une plateforme de paiement prélève sur une vente et calculez les frais nécessaires pour atteindre le montant net souhaité.",
          "formula": "Montant net = montant facturé × (1 − taux de frais) − frais fixes. Montant à facturer = (net souhaité + frais fixes) ÷ (1 − taux de frais).",
          "example": "Sur des frais de 100 $ avec des frais en pourcentage de 3 % et des frais fixes de 0,30 $, le paiement net est de 96,70 $. Pour recevoir 100 $ net, facturez environ 103,40 $.",
          "note": "Les processeurs de paiement peuvent appliquer des taxes supplémentaires, des frais transfrontaliers, des remboursements et des règles d'arrondi.",
          "fields": [
            "Montant facturé ou net souhaité",
            "Frais proportionnels (%)",
            "Frais fixes"
          ],
          "modes": [
            "Déduire les frais",
            "Retrouver le montant à facturer"
          ],
          "out": [
            "Frais totaux",
            "Paiement net",
            "Frais requis"
          ]
        },
        "discount": {
          "title": "Calculatrice de remises successives",
          "description": "Trouvez le prix final et la remise effective après deux offres ou coupons séquentiels.",
          "intro": "Une remise de 20 % suivie de 10 % supplémentaires n’est pas une remise de 30 %. Découvrez les économies réelles après les deux offres.",
          "formula": "Prix ​​final = prix d'origine × (1 − première remise) × (1 − deuxième remise).",
          "example": "Un article de 100 $ réduit de 20 %, puis de 10 %, coûte 72 $. Cela représente une remise totale de 28 %.",
          "note": "Les taxes, les frais d'expédition, les exclusions et l'ordre des opérations peuvent modifier le prix de paiement.",
          "fields": [
            "Prix d'origine",
            "Première remise (%)",
            "Deuxième remise (%)"
          ],
          "out": [
            "Prix final",
            "Économies totales",
            "Remise effective"
          ]
        },
        "days": {
          "title": "Calculatrice de jours entre deux dates",
          "description": "Comptez les jours entre deux dates, avec la possibilité d'inclure le premier jour.",
          "intro": "Calculez les jours calendaires écoulés pour les anniversaires, les dates limites ou les jalons du projet.",
          "formula": "Soustrayez les deux dates du calendrier en UTC pour éviter les transitions vers l'heure d'été. L'inclusion du premier jour ajoute un jour pour une plage ascendante.",
          "example": "Du 1er janvier au 11 janvier, 10 jours se sont écoulés. Si le 1er janvier compte comme premier jour, le décompte est de 11.",
          "note": "Il s'agit d'un décompte de jours calendaires, et non d'un calcul de jours ouvrables ou de jours fériés nationaux.",
          "fields": [
            "Date de début",
            "Date de fin"
          ],
          "out": [
            "Jours écoulés",
            "Semaines et jours"
          ]
        },
        "stock-average": {
          "title": "Calculatrice du prix moyen des actions",
          "description": "Calculez le nouveau coût moyen pondéré de vos actions après avoir acheté plus d’actions.",
          "intro": "Découvrez comment l’ajout d’actions à un prix d’achat différent modifie le coût moyen par action.",
          "formula": "Nouvelle moyenne = (actions actuelles × moyenne actuelle + nouvelles actions × prix d'achat) ÷ total des actions.",
          "example": "100 actions à 50 $ plus 100 actions à 40 $ donnent une moyenne de 45 $ sur 200 actions.",
          "note": "Les frais de négociation, les taxes, les taux de change et les ventes réalisées ne sont pas inclus. Il ne s’agit pas d’un conseil en investissement.",
          "fields": [
            "Actions actuelles",
            "Prix moyen actuel",
            "Actions supplémentaires",
            "Nouveau prix d'achat"
          ],
          "out": [
            "Nouveau coût moyen des actions",
            "Total des actions",
            "Base du coût total"
          ]
        },
        "compound": {
          "title": "Calculatrice d’intérêts composés",
          "description": "Estimez la croissance à long terme avec un dépôt initial, des ajouts mensuels et des rendements annuels.",
          "intro": "Projetez la façon dont l’épargne ou les investissements pourraient croître lorsque les rendements sont composés et que les cotisations sont ajoutées mensuellement.",
          "formula": "Taux effectif mensuel = (1 + rendement annuel) ^ (1/12) - 1. Appliquez la croissance, puis ajoutez chaque cotisation mensuelle.",
          "example": "Commencez avec 1 000 $, ajoutez 100 $ par mois et supposez un taux annuel de 5 % pendant 10 ans pour explorer le solde estimé.",
          "note": "Les rendements constants sont hypothétiques. Les rendements réels des investissements, les taxes et les frais varient ; les cotisations mensuelles sont versées en fin de mois.",
          "fields": [
            "Solde de départ",
            "Cotisation mensuelle",
            "Rendement annuel (%)",
            "Années"
          ],
          "out": [
            "Solde estimé",
            "Cotisations totales",
            "Croissance estimée"
          ]
        },
        "unit-converter": {
          "title": "Convertisseur d’unités",
          "description": "Convertissez les unités de longueur, de masse, de surface, de volume, de température et de stockage numérique.",
          "intro": "Basculez entre les mesures métriques et impériales sans changer de page.",
          "formula": "Pour les unités standard, convertissez-les en une unité de base commune avant de les convertir vers la destination. La température utilise un décalage ainsi qu'une échelle.",
          "example": "1 mile équivaut à 1,609344 kilomètres et 100°F équivaut à environ 37,78°C.",
          "note": "Des gallons liquides américains et des tasses américaines sont utilisés ; Les unités de stockage incluent les Ko/Mo/Go décimaux et les KiB/MiB/GiB binaires.",
          "fields": [
            "Valeur",
            "De",
            "À"
          ],
          "out": [
            "Valeur convertie"
          ]
        },
        "age": {
          "title": "Calculatrice d’âge",
          "description": "Calculez l'âge exact en années et jours complets depuis la naissance en utilisant une date de naissance.",
          "intro": "Trouvez l'âge révolu à ce jour, ainsi que le nombre de jours calendaires écoulés depuis la naissance.",
          "formula": "Années révolues = année de référence − année de naissance, moins un si l'anniversaire de cette année n'est pas encore survenu.",
          "example": "Une personne née le 31 décembre 2000 a encore 25 ans le 30 décembre 2026 et aura 26 ans le lendemain.",
          "note": "La date de référence est la date de votre calendrier local. Les définitions de l’âge légal peuvent différer selon le pays et le but.",
          "fields": [
            "Date de naissance"
          ],
          "out": [
            "Âge en années complètes",
            "Jours depuis la naissance"
          ]
        }
      }
    }
  },
  "ar": {
    "copy": {
      "label": "العربية",
      "tag": "ar",
      "home": "الآلات الحاسبة الدولية",
      "subtitle": "الحسابات العملية للتواريخ والمال والقرارات اليومية. اختر آلة حاسبة وشاهد الصيغة وراء الإجابة.",
      "choose": "اختر آلة حاسبة",
      "calculate": "احسب",
      "results": "النتائج",
      "inputs": "المدخلات الخاصة بك",
      "how": "كيف يعمل",
      "example": "عملت المثال",
      "note": "من المهم أن نعرف",
      "related": "اكتشف الآلات الحاسبة الأخرى",
      "lang": "اللغة",
      "currency": "العملة",
      "start": "تاريخ البدء",
      "end": "تاريخ الانتهاء",
      "included": "قم بتضمين تاريخ البدء",
      "invalid": "أدخل قيمًا صالحة لرؤية النتيجة.",
      "back": "جميع الآلات الحاسبة",
      "disclaimer": "تقديرات توضيحية. تحقق من الشروط الرسمية أو الخاصة بمزود الخدمة قبل اتخاذ القرارات المالية.",
      "today": "اليوم",
      "source": "الآلات الحاسبة الكورية الأصلية",
      "indexIntro": "تعمل هذه الأدوات عبر البلدان. حدد عملتك وتحقق مما إذا كان مزود الخدمة الخاص بك يطبق ضرائب أو رسوم إضافية.",
      "categories": {
        "length": "الطول",
        "weight": "الوزن",
        "area": "المنطقة",
        "volume": "الحجم",
        "temperature": "درجة الحرارة",
        "data": "تخزين البيانات"
      },
      "tools": {
        "fee": {
          "title": "حاسبة الرسوم وصافي المبلغ",
          "description": "ابحث عن الرسوم وصافي العائد والسعر المطلوب لتلقي المبلغ المستهدف بعد النسبة المئوية والرسوم الثابتة.",
          "intro": "قارن المبلغ الذي تأخذه منصة الدفع من عملية البيع واحسب الرسوم المطلوبة للوصول إلى المبلغ الذي تريده.",
          "formula": "الصافي = المبلغ المحصل × (1 − نسبة الرسوم) − الرسوم الثابتة. المبلغ المطلوب تحصيله = (الصافي المستهدف + الرسوم الثابتة) ÷ (1 − نسبة الرسوم).",
          "example": "مقابل رسوم قدرها 100 دولار أمريكي مع رسوم بنسبة 3% ورسوم ثابتة بقيمة 0.30 دولارًا أمريكيًا، يبلغ صافي العائد 96.70 دولارًا أمريكيًا. للحصول على صافي 100 دولار، ادفع حوالي 103.40 دولارًا.",
          "note": "قد يطبق معالجو الدفع ضرائب إضافية ورسومًا عبر الحدود واسترداد الأموال وقواعد التقريب.",
          "fields": [
            "المبلغ المطلوب تحصيله أو الصافي المستهدف",
            "نسبة الرسوم (%)",
            "الرسوم الثابتة"
          ],
          "modes": [
            "خصم الرسوم",
            "حساب المبلغ المطلوب من الصافي"
          ],
          "out": [
            "إجمالي الرسوم",
            "صافي الدفع",
            "التهمة المطلوبة"
          ]
        },
        "discount": {
          "title": "حاسبة الخصومات المتتالية",
          "description": "ابحث عن السعر النهائي والخصم الفعال بعد عرضين أو كوبونات متتابعة.",
          "intro": "خصم 20% متبوعًا بـ 10% أخرى لا يعتبر خصمًا بنسبة 30%. شاهد التوفير الحقيقي بعد كلا العرضين.",
          "formula": "السعر النهائي = السعر الأصلي × (1 – الخصم الأول) × (1 – الخصم الثاني).",
          "example": "يتم خصم عنصر بقيمة 100 دولار بنسبة 20% ثم 10% بسعر 72 دولارًا. هذا هو إجمالي الخصم 28٪.",
          "note": "يمكن للضرائب والشحن والاستثناءات وترتيب العمليات تغيير سعر الخروج.",
          "fields": [
            "السعر الأصلي",
            "الخصم الأول (%)",
            "الخصم الثاني (%)"
          ],
          "out": [
            "السعر النهائي",
            "إجمالي المدخرات",
            "خصم فعال"
          ]
        },
        "days": {
          "title": "حاسبة الأيام بين تاريخين",
          "description": "حساب الأيام بين تاريخين، مع إمكانية إدراج اليوم الأول.",
          "intro": "احسب الأيام التقويمية المنقضية لأعياد الميلاد أو الذكرى السنوية أو المواعيد النهائية أو معالم المشروع.",
          "formula": "اطرح تاريخي التقويم بالتوقيت العالمي المنسق (UTC) لتجنب التحولات إلى التوقيت الصيفي. بما في ذلك اليوم الأول يضيف يومًا واحدًا لنطاق تصاعدي.",
          "example": "من 1 يناير إلى 11 يناير هي 10 أيام منقضية. إذا كان يوم 1 يناير يعتبر اليوم الأول، يكون العدد 11.",
          "note": "هذا حساب يوم تقويمي، وليس حساب يوم عمل أو عطلة وطنية.",
          "fields": [
            "تاريخ البدء",
            "تاريخ الانتهاء"
          ],
          "out": [
            "الأيام المنقضية",
            "أسابيع وأيام"
          ]
        },
        "stock-average": {
          "title": "حاسبة متوسط سعر الأسهم",
          "description": "احسب تكلفة سهمك المتوسطة المرجحة الجديدة بعد شراء المزيد من الأسهم.",
          "intro": "تعرف على كيفية تغيير إضافة الأسهم بسعر شراء مختلف إلى متوسط ​​تكلفة السهم.",
          "formula": "المتوسط ​​الجديد = (الأسهم الحالية × المتوسط ​​الحالي + الأسهم الجديدة × سعر الشراء) ÷ إجمالي الأسهم.",
          "example": "100 سهم بسعر 50 دولارًا بالإضافة إلى 100 سهم بسعر 40 دولارًا يعطي متوسطًا قدره 45 دولارًا عبر 200 سهم.",
          "note": "لا يتم تضمين رسوم التداول والضرائب وأسعار صرف العملات الأجنبية والمبيعات المحققة. هذه ليست نصيحة استثمارية.",
          "fields": [
            "الأسهم الحالية",
            "متوسط السعر الحالي",
            "أسهم إضافية",
            "سعر الشراء الجديد"
          ],
          "out": [
            "متوسط تكلفة السهم الجديد",
            "إجمالي الأسهم",
            "أساس التكلفة الإجمالية"
          ]
        },
        "compound": {
          "title": "حاسبة الفائدة المركبة",
          "description": "قم بتقدير النمو على المدى الطويل من خلال الإيداع الأولي والإضافات الشهرية والعوائد السنوية.",
          "intro": "قم بتوضيح كيفية نمو المدخرات أو الاستثمارات عندما تتضاعف العائدات وتضاف المساهمات شهريًا.",
          "formula": "المعدل الفعلي الشهري = (1 + العائد السنوي)^(1/12) − 1. طبق النمو، ثم أضف كل مساهمة شهرية.",
          "example": "ابدأ بمبلغ 1000 دولار، وأضف 100 دولار شهريًا، وافترض معدلًا سنويًا بنسبة 5٪ لمدة 10 سنوات لاستكشاف الرصيد المقدر.",
          "note": "العوائد الثابتة افتراضية. وتختلف عوائد الاستثمار الحقيقية والضرائب والرسوم؛ يتم تقديم الاشتراكات الشهرية في نهاية الشهر.",
          "fields": [
            "رصيد البداية",
            "المساهمة الشهرية",
            "العائد السنوي (%)",
            "سنوات"
          ],
          "out": [
            "الرصيد المقدر",
            "إجمالي المساهمات",
            "النمو المقدر"
          ]
        },
        "unit-converter": {
          "title": "محول الوحدات",
          "description": "تحويل الطول والكتلة والمساحة والحجم ودرجة الحرارة ووحدات التخزين الرقمية.",
          "intro": "قم بالتبديل بين القياسات المترية والإمبراطورية دون تغيير الصفحات.",
          "formula": "بالنسبة للوحدات القياسية، قم بالتحويل إلى وحدة أساسية مشتركة قبل التحويل إلى الوجهة. تستخدم درجة الحرارة الإزاحة وكذلك المقياس.",
          "example": "1 ميل يساوي 1.609344 كيلومترًا، و100 درجة فهرنهايت تعادل 37.78 درجة مئوية تقريبًا.",
          "note": "يتم استخدام جالونات سائلة أمريكية وأكواب أمريكية. تتضمن وحدات التخزين العشرية kB/MB/GB والثنائي KiB/MiB/GiB.",
          "fields": [
            "القيمة",
            "من",
            "ل"
          ],
          "out": [
            "القيمة المحولة"
          ]
        },
        "age": {
          "title": "حاسبة العمر",
          "description": "حساب العمر الدقيق بالسنوات والأيام الكاملة منذ الولادة باستخدام تاريخ الميلاد.",
          "intro": "ابحث عن سنوات العمر الكاملة اعتبارًا من اليوم، بالإضافة إلى عدد الأيام التقويمية المنقضية منذ الولادة.",
          "formula": "السنوات الكاملة = السنة المرجعية - سنة الميلاد، ناقص واحد عندما لا يكون عيد ميلاد هذا العام قد حدث بعد.",
          "example": "الشخص الذي ولد في 31 ديسمبر 2000 لا يزال عمره 25 عامًا في 30 ديسمبر 2026، وسيبلغ 26 عامًا في اليوم التالي.",
          "note": "التاريخ المرجعي هو تاريخ التقويم المحلي الخاص بك. يمكن أن تختلف تعريفات السن القانوني حسب البلد والغرض.",
          "fields": [
            "تاريخ الميلاد"
          ],
          "out": [
            "العمر بالسنوات الكاملة",
            "أيام منذ الولادة"
          ]
        }
      }
    }
  },
  "bn": {
    "copy": {
      "label": "বাংলা",
      "tag": "bn",
      "home": "আন্তর্জাতিক ক্যালকুলেটর",
      "subtitle": "তারিখ, টাকা এবং দৈনন্দিন সিদ্ধান্তের জন্য ব্যবহারিক গণনা। একটি ক্যালকুলেটর চয়ন করুন এবং উত্তরের পিছনে সূত্রটি দেখুন।",
      "choose": "একটি ক্যালকুলেটর চয়ন করুন",
      "calculate": "হিসাব করুন",
      "results": "ফলাফল",
      "inputs": "আপনার ইনপুট",
      "how": "এটা কিভাবে কাজ করে",
      "example": "কাজের উদাহরণ",
      "note": "জানা জরুরী",
      "related": "অন্যান্য ক্যালকুলেটর অন্বেষণ করুন",
      "lang": "ভাষা",
      "currency": "মুদ্রা",
      "start": "শুরুর তারিখ",
      "end": "শেষ তারিখ",
      "included": "শুরুর তারিখ অন্তর্ভুক্ত করুন",
      "invalid": "একটি ফলাফল দেখতে বৈধ মান লিখুন.",
      "back": "সব ক্যালকুলেটর",
      "disclaimer": "দৃষ্টান্তমূলক অনুমান। আর্থিক সিদ্ধান্ত নেওয়ার আগে অফিসিয়াল বা প্রদানকারী-নির্দিষ্ট শর্তাবলী পরীক্ষা করুন।",
      "today": "আজ",
      "source": "আসল কোরিয়ান ক্যালকুলেটর",
      "indexIntro": "এই সরঞ্জামগুলি বিভিন্ন দেশে কাজ করে। আপনার মুদ্রা নির্বাচন করুন এবং আপনার প্রদানকারী অতিরিক্ত কর বা ফি প্রযোজ্য কিনা তা পরীক্ষা করুন।",
      "categories": {
        "length": "দৈর্ঘ্য",
        "weight": "ওজন",
        "area": "এলাকা",
        "volume": "আয়তন",
        "temperature": "তাপমাত্রা",
        "data": "ডেটা স্টোরেজ"
      },
      "tools": {
        "fee": {
          "title": "ফি ও নিট প্রাপ্তির ক্যালকুলেটর",
          "description": "শতাংশ এবং নির্দিষ্ট ফি এর পরে আপনার লক্ষ্য পরিমাণ পাওয়ার জন্য প্রয়োজনীয় ফি, নেট পেআউট এবং মূল্য খুঁজুন।",
          "intro": "একটি পেমেন্ট প্ল্যাটফর্ম একটি বিক্রয় থেকে কতটা নেয় তা তুলনা করুন এবং আপনার পছন্দসই টেক-হোম পরিমাণে পৌঁছানোর জন্য প্রয়োজনীয় চার্জ গণনা করুন।",
          "formula": "নিট প্রাপ্তি = আদায়ের পরিমাণ × (1 − ফি-এর হার) − নির্দিষ্ট ফি। প্রয়োজনীয় আদায় = (কাঙ্ক্ষিত নিট টাকা + নির্দিষ্ট ফি) ÷ (1 − ফি-এর হার)।",
          "example": "3% শতাংশ ফি এবং $0.30 ফিক্সড ফি সহ $100 চার্জে, নেট পেআউট হল $96.70৷ $100 নেট পেতে, প্রায় $103.40 চার্জ করুন।",
          "note": "পেমেন্ট প্রসেসর অতিরিক্ত ট্যাক্স, ক্রস-বর্ডার ফি, রিফান্ড এবং রাউন্ডিং নিয়ম প্রয়োগ করতে পারে।",
          "fields": [
            "আদায়ের পরিমাণ বা কাঙ্ক্ষিত নিট টাকা",
            "শতাংশ ফি (%)",
            "নির্দিষ্ট ফি"
          ],
          "modes": [
            "ফি বাদ দিন",
            "নিট টাকা থেকে আদায়ের পরিমাণ বের করুন"
          ],
          "out": [
            "মোট ফি",
            "নেট পেআউট",
            "প্রয়োজনীয় চার্জ"
          ]
        },
        "discount": {
          "title": "ধারাবাহিক ছাড়ের ক্যালকুলেটর",
          "description": "দুটি অনুক্রমিক অফার বা কুপনের পরে চূড়ান্ত মূল্য এবং কার্যকর ডিসকাউন্ট খুঁজুন।",
          "intro": "একটি 20% ডিসকাউন্ট তারপর অন্য 10% একটি 30% ডিসকাউন্ট নয়। উভয় অফার পরে প্রকৃত সঞ্চয় দেখুন.",
          "formula": "চূড়ান্ত মূল্য = মূল মূল্য × (1 − প্রথম ছাড়) × (1 − সেকেন্ড ছাড়)।",
          "example": "একটি $100 আইটেম 20% ছাড় এবং তারপর 10% এর দাম $72৷ এটি 28% মোট ডিসকাউন্ট।",
          "note": "ট্যাক্স, শিপিং, বর্জন এবং অর্ডার-অফ-অপারেশন চেকআউট মূল্য পরিবর্তন করতে পারে।",
          "fields": [
            "আসল দাম",
            "প্রথম ছাড় (%)",
            "দ্বিতীয় ছাড় (%)"
          ],
          "out": [
            "চূড়ান্ত মূল্য",
            "মোট সঞ্চয়",
            "কার্যকরী ছাড়"
          ]
        },
        "days": {
          "title": "দুই তারিখের মধ্যে দিনের ক্যালকুলেটর",
          "description": "প্রথম দিন অন্তর্ভুক্ত করার জন্য একটি পছন্দ সহ দুটি তারিখের মধ্যে দিনগুলি গণনা করুন৷",
          "intro": "জন্মদিন, বার্ষিকী, সময়সীমা বা প্রকল্পের মাইলফলকগুলির জন্য অতিবাহিত ক্যালেন্ডার দিনগুলি গণনা করুন৷",
          "formula": "ডেলাইট-সেভিং ট্রানজিশন এড়াতে UTC-তে দুটি ক্যালেন্ডার তারিখ বিয়োগ করুন। প্রথম দিন সহ একটি আরোহী পরিসরের জন্য একদিন যোগ করে।",
          "example": "জানুয়ারী 1 থেকে 11 জানুয়ারী পর্যন্ত 10টি অতিবাহিত দিন। 1 জানুয়ারী 1 দিন হিসাবে গণনা করা হলে, গণনা 11 হয়।",
          "note": "এটি একটি ক্যালেন্ডার-দিন গণনা, একটি ব্যবসায়িক দিন বা জাতীয় ছুটির গণনা নয়।",
          "fields": [
            "শুরুর তারিখ",
            "শেষ তারিখ"
          ],
          "out": [
            "অতিবাহিত দিনগুলি",
            "সপ্তাহ এবং দিন"
          ]
        },
        "stock-average": {
          "title": "শেয়ারের গড় ক্রয়মূল্যের ক্যালকুলেটর",
          "description": "আরও শেয়ার কেনার পরে আপনার নতুন ওজনযুক্ত-গড় শেয়ার খরচ গণনা করুন।",
          "intro": "দেখুন কিভাবে একটি ভিন্ন ক্রয় মূল্যে শেয়ার যোগ করলে শেয়ার প্রতি গড় খরচ পরিবর্তন হয়।",
          "formula": "নতুন গড় = (বর্তমান শেয়ার × বর্তমান গড় + নতুন শেয়ার × ক্রয় মূল্য) ÷ মোট শেয়ার।",
          "example": "$50-এ 100 শেয়ার এবং $40-এ 100 শেয়ার 200 শেয়ার জুড়ে $45 গড় দেয়।",
          "note": "ট্রেডিং ফি, ট্যাক্স, এফএক্স হার এবং উপলব্ধ বিক্রয় অন্তর্ভুক্ত নয়। এটি বিনিয়োগের পরামর্শ নয়।",
          "fields": [
            "বর্তমান শেয়ার",
            "বর্তমান গড় মূল্য",
            "অতিরিক্ত শেয়ার",
            "নতুন ক্রয় মূল্য"
          ],
          "out": [
            "নতুন গড় শেয়ার খরচ",
            "মোট শেয়ার",
            "মোট খরচের ভিত্তিতে"
          ]
        },
        "compound": {
          "title": "চক্রবৃদ্ধি সুদের ক্যালকুলেটর",
          "description": "একটি প্রাথমিক আমানত, মাসিক সংযোজন এবং বার্ষিক রিটার্ন সহ দীর্ঘমেয়াদী বৃদ্ধি অনুমান করুন।",
          "intro": "প্রজেক্ট করুন কিভাবে সঞ্চয় বা বিনিয়োগ বাড়তে পারে যখন আয় চক্রবৃদ্ধি এবং অবদান মাসিক যোগ করা হয়।",
          "formula": "মাসিক কার্যকর হার = (1 + বার্ষিক রিটার্ন)^(1/12) − 1. বৃদ্ধি প্রয়োগ করুন, তারপর প্রতিটি মাসিক অবদান যোগ করুন।",
          "example": "$1,000 দিয়ে শুরু করুন, মাসে $100 যোগ করুন এবং আনুমানিক ব্যালেন্স অন্বেষণ করতে 10 বছরের জন্য 5% বার্ষিক হার অনুমান করুন।",
          "note": "ধ্রুবক রিটার্ন অনুমানমূলক। প্রকৃত বিনিয়োগের রিটার্ন, কর এবং ফি পরিবর্তিত হয়; মাসিক অবদান মাস শেষে করা হয়.",
          "fields": [
            "ব্যালেন্স শুরু হচ্ছে",
            "মাসিক অবদান",
            "বার্ষিক রিটার্ন (%)",
            "বছর"
          ],
          "out": [
            "আনুমানিক ভারসাম্য",
            "মোট অবদান",
            "আনুমানিক বৃদ্ধি"
          ]
        },
        "unit-converter": {
          "title": "একক রূপান্তরকারী",
          "description": "দৈর্ঘ্য, ভর, এলাকা, আয়তন, তাপমাত্রা এবং ডিজিটাল স্টোরেজ ইউনিট রূপান্তর করুন।",
          "intro": "পৃষ্ঠা পরিবর্তন না করে মেট্রিক এবং ইম্পেরিয়াল পরিমাপের মধ্যে পরিবর্তন করুন।",
          "formula": "স্ট্যান্ডার্ড ইউনিটের জন্য, গন্তব্যে রূপান্তর করার আগে একটি সাধারণ বেস ইউনিটে রূপান্তর করুন। তাপমাত্রা একটি অফসেট পাশাপাশি একটি স্কেল ব্যবহার করে।",
          "example": "1 মাইল সমান 1.609344 কিলোমিটার, এবং 100°F প্রায় 37.78°C সমান।",
          "note": "মার্কিন তরল গ্যালন এবং মার্কিন কাপ ব্যবহার করা হয়; স্টোরেজ ইউনিটগুলির মধ্যে রয়েছে দশমিক kB/MB/GB এবং বাইনারি KiB/MiB/GiB।",
          "fields": [
            "মান",
            "থেকে",
            "প্রতি"
          ],
          "out": [
            "রূপান্তরিত মান"
          ]
        },
        "age": {
          "title": "বয়স ক্যালকুলেটর",
          "description": "জন্ম তারিখ ব্যবহার করে জন্মের পর থেকে পূর্ণ বছর এবং দিনে সঠিক বয়স গণনা করুন।",
          "intro": "আজকের হিসাবে বয়সের পূর্ণ বছরগুলি এবং জন্মের পর থেকে অতিবাহিত ক্যালেন্ডার দিনের সংখ্যা খুঁজুন৷",
          "formula": "সম্পূর্ণ বছর = রেফারেন্স বছর − জন্ম বছর, মাইনাস ওয়ান যখন এই বছরের জন্মদিন এখনও আসেনি।",
          "example": "31 ডিসেম্বর, 2000-এ জন্মগ্রহণকারী কেউ এখনও 30 ডিসেম্বর, 2026-এ 25, এবং পরের দিন 26 বছর বয়সী৷",
          "note": "রেফারেন্স তারিখ আপনার স্থানীয় ক্যালেন্ডার তারিখ. আইনগত বয়সের সংজ্ঞা দেশ এবং উদ্দেশ্য অনুসারে আলাদা হতে পারে।",
          "fields": [
            "জন্ম তারিখ"
          ],
          "out": [
            "পুরো বছর বয়স",
            "জন্মের পর থেকে দিন"
          ]
        }
      }
    }
  },
  "ur": {
    "copy": {
      "label": "اردو",
      "tag": "ur",
      "home": "بین الاقوامی کیلکولیٹر",
      "subtitle": "تاریخوں، پیسے اور روزمرہ کے فیصلوں کے لیے عملی حساب کتاب۔ ایک کیلکولیٹر کا انتخاب کریں اور جواب کے پیچھے فارمولہ دیکھیں۔",
      "choose": "ایک کیلکولیٹر کا انتخاب کریں۔",
      "calculate": "حساب لگانا",
      "results": "نتائج",
      "inputs": "آپ کی معلومات",
      "how": "یہ کیسے کام کرتا ہے۔",
      "example": "کام کی مثال",
      "note": "جاننا ضروری ہے۔",
      "related": "دوسرے کیلکولیٹر دریافت کریں۔",
      "lang": "زبان",
      "currency": "کرنسی",
      "start": "تاریخ شروع",
      "end": "اختتامی تاریخ",
      "included": "شروع کی تاریخ شامل کریں۔",
      "invalid": "نتیجہ دیکھنے کے لیے درست اقدار درج کریں۔",
      "back": "تمام کیلکولیٹر",
      "disclaimer": "مثالی اندازے مالی فیصلے کرنے سے پہلے سرکاری یا فراہم کنندہ کی مخصوص شرائط کو چیک کریں۔",
      "today": "آج",
      "source": "اصل کوریائی کیلکولیٹر",
      "indexIntro": "یہ ٹولز تمام ممالک میں کام کرتے ہیں۔ اپنی کرنسی منتخب کریں اور چیک کریں کہ آیا آپ کا فراہم کنندہ اضافی ٹیکس یا فیس لاگو کرتا ہے۔",
      "categories": {
        "length": "لمبائی",
        "weight": "وزن",
        "area": "علاقہ",
        "volume": "حجم",
        "temperature": "درجہ حرارت",
        "data": "ڈیٹا اسٹوریج"
      },
      "tools": {
        "fee": {
          "title": "فیس اور خالص وصولی کا کیلکولیٹر",
          "description": "فیصد اور مقررہ فیس کے بعد اپنی ہدف کی رقم وصول کرنے کے لیے درکار فیس، خالص ادائیگی اور قیمت تلاش کریں۔",
          "intro": "موازنہ کریں کہ ادائیگی کا پلیٹ فارم فروخت سے کتنا لیتا ہے اور آپ کی مطلوبہ گھر لے جانے والی رقم تک پہنچنے کے لیے درکار چارج کا حساب لگائیں۔",
          "formula": "خالص وصولی = وصول کی گئی رقم × (1 − فیس کی شرح) − مقررہ فیس۔ مطلوبہ وصولی = (مطلوبہ خالص رقم + مقررہ فیس) ÷ (1 − فیس کی شرح)۔",
          "example": "3% فیصد فیس اور $0.30 مقررہ فیس کے ساتھ $100 چارج پر، خالص ادائیگی $96.70 ہے۔ $100 نیٹ وصول کرنے کے لیے، تقریباً $103.40 چارج کریں۔",
          "note": "ادائیگی کے پروسیسرز اضافی ٹیکس، سرحد پار فیس، ریفنڈز اور راؤنڈنگ رولز لاگو کر سکتے ہیں۔",
          "fields": [
            "وصول کی جانے والی رقم یا مطلوبہ خالص رقم",
            "فیصد فیس (%)",
            "مقررہ فیس"
          ],
          "modes": [
            "فیس منہا کریں",
            "خالص رقم سے وصولی کی رقم نکالیں"
          ],
          "out": [
            "کل فیس",
            "خالص ادائیگی",
            "مطلوبہ چارج"
          ]
        },
        "discount": {
          "title": "مسلسل رعایتوں کا کیلکولیٹر",
          "description": "دو ترتیب وار پیشکشوں یا کوپنز کے بعد حتمی قیمت اور مؤثر رعایت تلاش کریں۔",
          "intro": "20% رعایت کے بعد مزید 10% ڈسکاؤنٹ 30% رعایت نہیں ہے۔ دونوں پیشکشوں کے بعد حقیقی بچت دیکھیں۔",
          "formula": "حتمی قیمت = اصل قیمت × (1 − پہلی رعایت) × (1 − سیکنڈ رعایت)۔",
          "example": "ایک $100 آئٹم پر 20% کی رعایت اور پھر 10% کی قیمت $72 ہے۔ یہ کل 28% رعایت ہے۔",
          "note": "ٹیکس، شپنگ، اخراج اور آرڈر آف آپریشنز چیک آؤٹ کی قیمت کو تبدیل کر سکتے ہیں۔",
          "fields": [
            "اصل قیمت",
            "پہلی رعایت (%)",
            "دوسری رعایت (%)"
          ],
          "out": [
            "حتمی قیمت",
            "کل بچت",
            "مؤثر رعایت"
          ]
        },
        "days": {
          "title": "دو تاریخوں کے درمیان دنوں کا کیلکولیٹر",
          "description": "پہلے دن کو شامل کرنے کے انتخاب کے ساتھ، دو تاریخوں کے درمیان دنوں کو شمار کریں۔",
          "intro": "سالگرہ، سالگرہ، آخری تاریخ یا پروجیکٹ سنگ میل کے لیے گزرے ہوئے کیلنڈر کے دنوں کا حساب لگائیں۔",
          "formula": "دن کی روشنی کی بچت کی منتقلی سے بچنے کے لیے UTC میں کیلنڈر کی دو تاریخوں کو گھٹائیں۔ پہلے دن سمیت چڑھتے ہوئے رینج میں ایک دن کا اضافہ ہوتا ہے۔",
          "example": "1 جنوری سے 11 جنوری تک 10 گزرے ہوئے دن ہیں۔ اگر 1 جنوری کو دن 1 شمار کیا جائے تو گنتی 11 ہے۔",
          "note": "یہ کیلنڈر کے دن کی گنتی ہے، کاروباری دن یا قومی چھٹیوں کا حساب نہیں۔",
          "fields": [
            "تاریخ شروع",
            "اختتامی تاریخ"
          ],
          "out": [
            "گزرے دن",
            "ہفتے اور دن"
          ]
        },
        "stock-average": {
          "title": "حصص کی اوسط خرید قیمت کا کیلکولیٹر",
          "description": "مزید شیئرز خریدنے کے بعد اپنے نئے وزنی اوسط حصص کی لاگت کا حساب لگائیں۔",
          "intro": "دیکھیں کہ کس طرح مختلف قیمت خرید پر حصص شامل کرنے سے فی حصص کی اوسط قیمت میں تبدیلی آتی ہے۔",
          "formula": "نیا اوسط = (موجودہ حصص × موجودہ اوسط + نئے حصص × قیمت خرید) ÷ کل حصص۔",
          "example": "$50 پر 100 حصص جمع $40 پر 100 حصص 200 حصص میں اوسطاً $45 دیتا ہے۔",
          "note": "ٹریڈنگ فیس، ٹیکس، ایف ایکس ریٹس اور حقیقی سیلز شامل نہیں ہیں۔ یہ سرمایہ کاری کا مشورہ نہیں ہے۔",
          "fields": [
            "موجودہ حصص",
            "موجودہ اوسط قیمت",
            "اضافی حصص",
            "نئی قیمت خرید"
          ],
          "out": [
            "نئی اوسط شیئر لاگت",
            "کل شیئرز",
            "کل لاگت کی بنیاد"
          ]
        },
        "compound": {
          "title": "مرکب سود کا کیلکولیٹر",
          "description": "ابتدائی ڈپازٹ، ماہانہ اضافے اور سالانہ منافع کے ساتھ طویل مدتی ترقی کا تخمینہ لگائیں۔",
          "intro": "پروجیکٹ کریں کہ جب ریٹرن کمپاؤنڈ اور شراکتیں ماہانہ شامل کی جائیں تو بچت یا سرمایہ کاری کیسے بڑھ سکتی ہے۔",
          "formula": "ماہانہ مؤثر شرح = (1 + سالانہ واپسی)^(1/12) − 1. ترقی کا اطلاق کریں، پھر ہر ماہانہ تعاون شامل کریں۔",
          "example": "$1,000 سے شروع کریں، $100 ماہانہ شامل کریں، اور تخمینہ شدہ بیلنس کو دریافت کرنے کے لیے 10 سال کے لیے 5% سالانہ شرح فرض کریں۔",
          "note": "مستقل واپسی فرضی ہے۔ حقیقی سرمایہ کاری کے منافع، ٹیکس اور فیسیں مختلف ہوتی ہیں۔ ماہانہ تعاون مہینے کے آخر میں کیا جاتا ہے۔",
          "fields": [
            "بیلنس شروع ہو رہا ہے۔",
            "ماہانہ تعاون",
            "سالانہ واپسی (%)",
            "سال"
          ],
          "out": [
            "تخمینی توازن",
            "کل شراکتیں۔",
            "متوقع نمو"
          ]
        },
        "unit-converter": {
          "title": "اکائیوں کا کنورٹر",
          "description": "لمبائی، بڑے پیمانے پر، رقبہ، حجم، درجہ حرارت اور ڈیجیٹل اسٹوریج یونٹس کو تبدیل کریں۔",
          "intro": "صفحات کو تبدیل کیے بغیر میٹرک اور امپیریل پیمائش کے درمیان سوئچ کریں۔",
          "formula": "معیاری اکائیوں کے لیے، منزل پر جانے سے پہلے ایک مشترکہ بیس یونٹ میں تبدیل کریں۔ درجہ حرارت ایک آفسیٹ کے ساتھ ساتھ پیمانے کا استعمال کرتا ہے۔",
          "example": "1 میل 1.609344 کلومیٹر کے برابر ہے، اور 100°F تقریباً 37.78°C کے برابر ہے۔",
          "note": "امریکی مائع گیلن اور امریکی کپ استعمال کیے جاتے ہیں۔ اسٹوریج یونٹس میں اعشاریہ kB/MB/GB اور بائنری KiB/MiB/GiB شامل ہیں۔",
          "fields": [
            "قدر",
            "سے",
            "کو"
          ],
          "out": [
            "تبدیل شدہ قدر"
          ]
        },
        "age": {
          "title": "عمر کا کیلکولیٹر",
          "description": "تاریخ پیدائش کا استعمال کرتے ہوئے پیدائش کے بعد سے پورے سالوں اور دنوں میں صحیح عمر کا حساب لگائیں۔",
          "intro": "آج تک کی عمر کے مکمل ہونے کے ساتھ ساتھ پیدائش کے بعد سے گزرے ہوئے کیلنڈر دنوں کی تعداد تلاش کریں۔",
          "formula": "مکمل ہوئے سال = حوالہ سال − پیدائش کا سال، مائنس ایک جب اس سال کی سالگرہ ابھی تک نہیں آئی ہے۔",
          "example": "31 دسمبر 2000 کو پیدا ہونے والا کوئی شخص 30 دسمبر 2026 کو 25 سال کا ہے اور اگلے دن 26 سال کا ہو جاتا ہے۔",
          "note": "حوالہ کی تاریخ آپ کی مقامی کیلنڈر کی تاریخ ہے۔ قانونی عمر کی تعریفیں ملک اور مقصد کے لحاظ سے مختلف ہو سکتی ہیں۔",
          "fields": [
            "تاریخ پیدائش"
          ],
          "out": [
            "پورے سال میں عمر",
            "پیدائش کے بعد سے دن"
          ]
        }
      }
    }
  },
  "vi": {
    "copy": {
      "label": "Tiếng Việt",
      "tag": "vi",
      "home": "Máy tính quốc tế",
      "subtitle": "Tính toán thực tế cho ngày tháng, tiền bạc và các quyết định hàng ngày. Chọn một máy tính và xem công thức đằng sau câu trả lời.",
      "choose": "Chọn một máy tính",
      "calculate": "Tính toán",
      "results": "Kết quả",
      "inputs": "Đầu vào của bạn",
      "how": "Nó hoạt động như thế nào",
      "example": "Ví dụ hoạt động",
      "note": "Điều quan trọng cần biết",
      "related": "Khám phá các máy tính khác",
      "lang": "Ngôn ngữ",
      "currency": "Tiền tệ",
      "start": "Ngày bắt đầu",
      "end": "Ngày kết thúc",
      "included": "Bao gồm ngày bắt đầu",
      "invalid": "Nhập các giá trị hợp lệ để xem kết quả.",
      "back": "Tất cả các máy tính",
      "disclaimer": "Ước tính minh họa. Kiểm tra các điều khoản chính thức hoặc dành riêng cho nhà cung cấp trước khi đưa ra quyết định tài chính.",
      "today": "hôm nay",
      "source": "Máy tính chính hãng Hàn Quốc",
      "indexIntro": "Những công cụ này hoạt động trên khắp các quốc gia. Chọn đơn vị tiền tệ của bạn và kiểm tra xem nhà cung cấp của bạn có áp dụng thêm thuế hoặc phí hay không.",
      "categories": {
        "length": "Chiều dài",
        "weight": "cân nặng",
        "area": "Khu vực",
        "volume": "khối lượng",
        "temperature": "Nhiệt độ",
        "data": "Lưu trữ dữ liệu"
      },
      "tools": {
        "fee": {
          "title": "Máy tính phí và số tiền thực nhận",
          "description": "Tìm mức phí, khoản thanh toán ròng và mức giá cần thiết để nhận được số tiền mục tiêu của bạn sau phần trăm và phí cố định.",
          "intro": "So sánh số tiền mà nền tảng thanh toán thu được từ một giao dịch bán hàng và tính toán khoản phí cần thiết để đạt được số tiền mang về nhà mà bạn mong muốn.",
          "formula": "Tiền thực nhận = số tiền thu × (1 − tỷ lệ phí) − phí cố định. Số tiền cần thu = (tiền thực nhận mong muốn + phí cố định) ÷ (1 − tỷ lệ phí).",
          "example": "Với khoản phí 100 đô la với phí phần trăm 3% và phí cố định 0,30 đô la, khoản thanh toán ròng là 96,70 đô la. Để nhận được 100 USD ròng, hãy tính phí khoảng 103,40 USD.",
          "note": "Bộ xử lý thanh toán có thể áp dụng các loại thuế bổ sung, phí xuyên biên giới, hoàn tiền và quy tắc làm tròn.",
          "fields": [
            "Số tiền thu hoặc số tiền thực nhận mong muốn",
            "Phí theo tỷ lệ (%)",
            "Phí cố định"
          ],
          "modes": [
            "Trừ phí",
            "Tính ngược từ số tiền thực nhận"
          ],
          "out": [
            "Tổng phí",
            "Xuất chi ròng",
            "Phí bắt buộc"
          ]
        },
        "discount": {
          "title": "Máy tính giảm giá liên tiếp",
          "description": "Tìm giá cuối cùng và mức giảm giá hiệu quả sau hai ưu đãi hoặc phiếu giảm giá liên tiếp.",
          "intro": "Giảm giá 20% sau đó giảm thêm 10% nữa không phải là giảm giá 30%. Xem số tiền tiết kiệm thực sự sau cả hai ưu đãi.",
          "formula": "Giá cuối cùng = giá gốc × (1 − Giảm giá đầu tiên) × (Giảm giá 1 − thứ hai).",
          "example": "Một mặt hàng trị giá 100 USD được giảm giá 20% và sau đó giảm 10% có giá 72 USD. Đó là tổng giảm giá 28%.",
          "note": "Thuế, vận chuyển, loại trừ và thứ tự hoạt động có thể thay đổi giá thanh toán.",
          "fields": [
            "Giá gốc",
            "Giảm giá lần đầu (%)",
            "Giảm giá lần thứ hai (%)"
          ],
          "out": [
            "Giá cuối cùng",
            "Tổng số tiền tiết kiệm",
            "Giảm giá hiệu quả"
          ]
        },
        "days": {
          "title": "Máy tính số ngày giữa hai ngày",
          "description": "Đếm số ngày giữa hai ngày, với lựa chọn bao gồm ngày đầu tiên.",
          "intro": "Tính toán các ngày theo lịch đã trôi qua cho ngày sinh nhật, ngày kỷ niệm, thời hạn hoặc các mốc quan trọng của dự án.",
          "formula": "Trừ hai ngày theo lịch theo giờ UTC để tránh chuyển đổi theo tiết kiệm ánh sáng ban ngày. Bao gồm ngày đầu tiên sẽ thêm một ngày cho phạm vi tăng dần.",
          "example": "Từ ngày 1 tháng 1 đến ngày 11 tháng 1 là 10 ngày trôi qua. Nếu ngày 1 tháng 1 được tính là ngày 1 thì số đếm là 11.",
          "note": "Đây là số ngày theo lịch, không phải là ngày làm việc hay ngày nghỉ lễ quốc gia.",
          "fields": [
            "Ngày bắt đầu",
            "Ngày kết thúc"
          ],
          "out": [
            "Ngày đã qua",
            "Tuần và ngày"
          ]
        },
        "stock-average": {
          "title": "Máy tính giá vốn trung bình cổ phiếu",
          "description": "Tính chi phí cổ phiếu bình quân gia quyền mới của bạn sau khi mua thêm cổ phiếu.",
          "intro": "Xem việc thêm cổ phiếu ở mức giá mua khác sẽ thay đổi chi phí trung bình trên mỗi cổ phiếu như thế nào.",
          "formula": "Trung bình mới = (cổ phiếu hiện tại × trung bình hiện tại + cổ phiếu mới × giá mua) ` tổng số cổ phiếu.",
          "example": "100 cổ phiếu ở mức 50 đô la cộng với 100 cổ phiếu ở mức 40 đô la sẽ có mức trung bình là 45 đô la trên 200 cổ phiếu.",
          "note": "Không bao gồm phí giao dịch, thuế, tỷ giá hối đoái và doanh thu thực hiện. Đây không phải là lời khuyên đầu tư.",
          "fields": [
            "Cổ phiếu hiện tại",
            "Giá trung bình hiện tại",
            "Chia sẻ bổ sung",
            "Giá mua mới"
          ],
          "out": [
            "Giá cổ phiếu trung bình mới",
            "Tổng số cổ phần",
            "Tổng chi phí cơ sở"
          ]
        },
        "compound": {
          "title": "Máy tính lãi kép",
          "description": "Ước tính mức tăng trưởng dài hạn với khoản tiền gửi ban đầu, khoản bổ sung hàng tháng và lợi nhuận hàng năm.",
          "intro": "Dự đoán mức độ tiết kiệm hoặc đầu tư có thể tăng lên khi lợi nhuận gộp và các khoản đóng góp được cộng thêm hàng tháng.",
          "formula": "Tỷ lệ hiệu quả hàng tháng = (1 + lợi nhuận hàng năm)^(1/12) − 1. Áp dụng mức tăng trưởng, sau đó cộng từng khoản đóng góp hàng tháng.",
          "example": "Bắt đầu với 1.000 USD, thêm 100 USD hàng tháng và giả định lãi suất hàng năm là 5% trong 10 năm để khám phá số dư ước tính.",
          "note": "Lợi nhuận không đổi chỉ là giả thuyết. Lợi nhuận đầu tư thực, thuế và phí khác nhau; đóng góp hàng tháng được thực hiện vào cuối tháng.",
          "fields": [
            "Số dư ban đầu",
            "Đóng góp hàng tháng",
            "Lợi nhuận hàng năm (%)",
            "Năm"
          ],
          "out": [
            "Số dư ước tính",
            "Tổng đóng góp",
            "Tăng trưởng ước tính"
          ]
        },
        "unit-converter": {
          "title": "Công cụ đổi đơn vị",
          "description": "Chuyển đổi chiều dài, khối lượng, diện tích, thể tích, nhiệt độ và đơn vị lưu trữ kỹ thuật số.",
          "intro": "Chuyển đổi giữa các phép đo hệ mét và hệ đo lường Anh mà không cần thay đổi trang.",
          "formula": "Đối với đơn vị tiêu chuẩn, hãy chuyển đổi sang đơn vị cơ sở chung trước khi chuyển đổi sang đích. Nhiệt độ sử dụng phần bù cũng như thang đo.",
          "example": "1 dặm bằng 1,609344 km và 100°F bằng khoảng 37,78°C.",
          "note": "Các gallon chất lỏng của Hoa Kỳ và cốc của Hoa Kỳ được sử dụng; đơn vị lưu trữ bao gồm kB/MB/GB thập phân và KiB/MiB/GiB nhị phân.",
          "fields": [
            "Giá trị",
            "Từ",
            "Đến"
          ],
          "out": [
            "Giá trị được chuyển đổi"
          ]
        },
        "age": {
          "title": "Máy tính tuổi",
          "description": "Tính tuổi chính xác theo năm và ngày đầy đủ kể từ khi sinh bằng cách sử dụng ngày sinh.",
          "intro": "Tìm số tuổi đã hoàn thành tính đến ngày hôm nay, cộng với số ngày theo lịch đã trôi qua kể từ khi sinh ra.",
          "formula": "Năm đã hoàn thành = năm tham chiếu − năm sinh, trừ đi một khi chưa đến ngày sinh nhật của năm nay.",
          "example": "Một người sinh ngày 31 tháng 12 năm 2000 vẫn 25 tuổi vào ngày 30 tháng 12 năm 2026 và bước sang tuổi 26 vào ngày hôm sau.",
          "note": "Ngày tham chiếu là ngày theo lịch địa phương của bạn. Định nghĩa về độ tuổi hợp pháp có thể khác nhau tùy theo quốc gia và mục đích.",
          "fields": [
            "Ngày sinh"
          ],
          "out": [
            "Tuổi đủ năm",
            "Ngày kể từ khi sinh"
          ]
        }
      }
    }
  }
};
