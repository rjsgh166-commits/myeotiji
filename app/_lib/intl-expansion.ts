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
  }
};
