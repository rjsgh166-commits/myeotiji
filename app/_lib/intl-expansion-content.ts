export const EXPANSION = {
  "es": {
    "labels": {
      "home": "Calculadoras",
      "guides": "Guías de cálculo",
      "policy": "Cómo preparamos estas guías",
      "title": "Guías de cálculo: fórmulas y ejemplos resueltos",
      "description": "Cálculos prácticos para fechas, dinero y decisiones cotidianas. Elija una calculadora y vea la fórmula detrás de la respuesta.",
      "intro": "Comience con la pregunta que desea responder. Cada guía explica el método, analiza los números y vincula a una calculadora que puede usar con sus propios datos.",
      "global": "Dinero, fechas y cálculos cotidianos",
      "country": "Estados Unidos: salario, impuestos y jubilación",
      "quick": "respuesta rapida",
      "contents": "En esta página",
      "try": "prueba la calculadora",
      "related": "Guías relacionadas",
      "questions": "Preguntas comunes",
      "references": "Fuentes y lecturas adicionales",
      "updated": "Actualizado",
      "author": "Preparado por Myeotiji",
      "exampleNote": "Los ejemplos ilustran los supuestos establecidos. Las tarifas, devoluciones y montos de nómina reales pueden diferir.",
      "policyTitle": "Guías de cálculo de Myeotiji: fuentes y método editorial",
      "policyDescription": "Cómo Myeotiji explica los cálculos, verifica ejemplos, cita fuentes y maneja correcciones y estimaciones.",
      "calculatorLink": "Ver la fórmula, un ejemplo resuelto y errores comunes →",
      "homeTitle": "Calculadoras financieras y cotidianas gratuitas | Myeotiji",
      "homeHeading": "Calculadoras gratuitas para dinero, trabajo y vida cotidiana",
      "homeDescription": "Cálculos prácticos para fechas, dinero y decisiones cotidianas. Elija una calculadora y vea la fórmula detrás de la respuesta."
    },
    "guides": {
      "fee": {
        "title": "Cómo calcular comisiones y cuánto cobrar para recibir un importe neto",
        "description": "Calcule los ingresos netos después del porcentaje y las tarifas fijas, luego invierta la fórmula para encontrar el cargo necesario para un pago objetivo.",
        "answer": "Reste tanto la tarifa porcentual como la tarifa fija del cargo. Para recibir una cantidad particular después de las tarifas, divida el objetivo más la tarifa fija por uno menos la tasa porcentual.",
        "sections": [
          {
            "heading": "Separar las dos partes de la tarifa",
            "paragraphs": [
              "Una tarifa porcentual crece con la cantidad recaudada; una tarifa de transacción fija no. Escribe el porcentaje como decimal antes de multiplicar. Para una tarifa hipotética del 3%, utilice 0,03. Una tarifa fija de 0,30 significa 30 céntimos en la moneda que hayas seleccionado, no otro porcentaje.",
              "Ingresos netos = cargo × (1 − tasa) − tarifa fija. Consulta a qué monto el proveedor aplica su tarifa: el envío, los impuestos, la conversión de moneda y los cargos transfronterizos pueden tener un tratamiento separado. Esta guía describe la aritmética, no la tarifa actual de ningún proveedor."
            ]
          },
          {
            "heading": "Un ejemplo práctico: por qué añadir el 3% no es suficiente",
            "paragraphs": [
              "Suponga que cobra US$ 100 y la tarifa hipotética es del 3% más US$ 0,30. La parte porcentual es US$ 3; al agregar la parte fija se obtiene una tarifa de US$ 3,30 y una ganancia neta de US$ 96,70.",
              "Para recibir US$ 100 netos, resuelva el cargo × 0,97 − 0,30 = 100. El cargo no redondeado requerido es 100,30 ÷ 0,97, aproximadamente US$ 1.034.021. Sumar 3% a US$ 100 da US$ 103, cuyo neto es sólo US$ 99,61. La diferencia surge porque el proveedor también cobra una tarifa por el aumento del cargo."
            ],
            "table": {
              "headers": [
                "Cargar",
                "Tarifa hipotética",
                "neto"
              ],
              "rows": [
                [
                  "US$ 100,00",
                  "US$ 3,30",
                  "US$ 96,70"
                ],
                [
                  "US$ 103,00",
                  "US$ 3,39",
                  "US$ 99,61"
                ],
                [
                  "US$ 103,40",
                  "US$ 3.402 antes del redondeo",
                  "US$ 99.998 antes de redondear"
                ]
              ]
            }
          },
          {
            "heading": "Utilice el resultado como verificación de precios",
            "paragraphs": [
              "Ingrese el monto recaudado para un cálculo directo o seleccione el modo objetivo neto para un cálculo inverso. Mantenga la moneda seleccionada consistente con su tarifa fija. La selección de moneda cambia el formato; no realiza una conversión de tipo de cambio.",
              "La pantalla redondea el resultado para su visualización. Si se debe alcanzar exactamente un pago mínimo, verifique el siguiente incremento de moneda más pequeño y las reglas de redondeo de su proveedor. Los reembolsos, las tarifas mínimas, los impuestos sobre las tarifas y si se permiten recargos requieren comprobaciones por separado."
            ]
          }
        ],
        "faqs": [
          {
            "question": "¿Una tarifa del 0 % siempre significa que recibo el cargo completo?",
            "answer": "Sólo si la cuota fija también es cero y no se aplica ninguna otra deducción. Una tarifa porcentual del 0% más una tarifa fija de US$ 0,30 todavía deja US$ 99,70 de un cargo de US$ 100."
          },
          {
            "question": "¿Puedo comparar diferentes proveedores de pago?",
            "answer": "Sí, ingresa la tarifa publicada y la tarifa fija de cada proveedor usando el mismo cargo. Compare el resultado con los cargos adicionales y los términos que se aplican a su cuenta."
          }
        ]
      },
      "discount": {
        "title": "Descuentos acumulados: por qué 20% y 10% equivalen al 28%",
        "description": "Calcula descuentos sucesivos, compara combinaciones de cupones y distingue el porcentaje del precio final del importe ahorrado.",
        "answer": "Aplicar el segundo descuento al precio ya reducido. Un descuento del 20 % seguido del 10 % deja 80 % × 90 % = 72 % del precio original, por lo que el ahorro total es del 28 %.",
        "sections": [
          {
            "heading": "Multiplica el precio que sigues pagando",
            "paragraphs": [
              "Para cada porcentaje de descuento, reste la tasa decimal de uno. Multiplica el precio original por las fracciones restantes. Con dos descuentos, precio final = original × (1 − primera tarifa) × (1 − segunda tarifa). Descuento efectivo = 1 − precio final ÷ precio original.",
              "Agregar las tarifas trataría ambos descuentos como si se aplicaran al precio original. Esa es una oferta diferente. Una tienda que promete una única reducción del 30% está ofreciendo un porcentaje de reducción mayor que las reducciones sucesivas del 20% y el 10%, antes de considerar otros términos."
            ]
          },
          {
            "heading": "Compara dos ofertas en un artículo de US$ 100",
            "paragraphs": [
              "Después de la primera reducción del 20%, el artículo cuesta US$ 80. La segunda reducción del 10% elimina US$ 8, dejando US$ 72. El ahorro total es de US$ 28. Invertir el orden de dos descuentos porcentuales puros da el mismo resultado matemático, porque los factores del precio restante se multiplican.",
              "Esa regla de orden no se extiende automáticamente a un cupón de valor fijo. Un cupón de US$ 10 después del 20% de descuento en un artículo de US$ 100 da US$ 70. Quitar US$ 10 de descuento primero y luego aplicar el 20% da US$ 72. Los gastos mínimos, los límites y los productos excluidos pueden cambiar la oferta que realmente se puede utilizar."
            ],
            "table": {
              "headers": [
                "oferta",
                "precio final",
                "Ahorro"
              ],
              "rows": [
                [
                  "20%, luego 10%",
                  "US$ 72",
                  "28%"
                ],
                [
                  "Un 30% de descuento",
                  "US$ 70",
                  "30%"
                ],
                [
                  "20%, luego un cupón de US$ 10",
                  "US$ 70",
                  "US$ 30"
                ]
              ]
            }
          },
          {
            "heading": "Introduzca la reducción anunciada, no el precio restante",
            "paragraphs": [
              "Los campos de la calculadora toman porcentajes de descuento. Una etiqueta que diga pagar el 80% del precio original significa un 20% de descuento. En cambio, ingresar 80 calcularía una reducción del 80%.",
              "La herramienta modela dos reducciones porcentuales sucesivas. No agrega impuestos sobre las ventas, entrega, reembolso en efectivo ni cupones fijos. Compare los totales de pago cuando esos artículos difieran y permita el redondeo real del vendedor en cada paso."
            ]
          }
        ],
        "faqs": [
          {
            "question": "¿El 50% de descuento es seguido del 50% de descuento gratis?",
            "answer": "No. La mitad del precio original permanece después de la primera reducción y la mitad después de la segunda. Pagas el 25% del precio original, un ahorro del 75%."
          },
          {
            "question": "¿Por qué el ahorro en mi recibo difiere ligeramente?",
            "answer": "Un minorista puede redondear cada artículo o cada descuento por separado, o aplicar descuentos a diferentes montos elegibles. Esta calculadora utiliza los dos porcentajes indicados antes de mostrar un resultado redondeado."
          }
        ]
      },
      "days": {
        "title": "Días entre dos fechas: cómo contar el primer día y los años bisiestos",
        "description": "Comprenda los días transcurridos versus el recuento de fechas inclusivas, los días bisiestos, los fines de semana y por qué una herramienta de días calendario es diferente de una calculadora de fechas límite.",
        "answer": "Para los días calendario transcurridos, reste la fecha de inicio de la fecha de finalización. Si el día de inicio es el día 1, agregue uno para un rango de fechas adelantadas. Del 1 de enero al 11 de enero son 10 días transcurridos u 11 días inclusive.",
        "sections": [
          {
            "heading": "Elija primero la convención de conteo",
            "paragraphs": [
              "Una estancia de lunes a martes dura una noche pero abarca dos fechas naturales. Ambos números pueden ser correctos porque responden a preguntas diferentes. Decida si desea los días transcurridos o la cantidad de fechas incluidas en un período antes de comparar los resultados.",
              "Para un rango ascendente, la opción de inicio de inclusión de la calculadora agrega un día. Por lo tanto, la misma fecha de inicio y finalización da como resultado cero días transcurridos o un día incluido. Una fecha de finalización anterior a la fecha de inicio da un intervalo negativo; Invierta las fechas cuando desee un período de avance normal."
            ]
          },
          {
            "heading": "Trabaje con un ejemplo de año bisiesto",
            "paragraphs": [
              "En 2028, del 28 de febrero al 1 de marzo abarcan dos días transcurridos porque el 29 de febrero cae entre ellos. El conteo inclusivo da tres fechas del calendario: 28 de febrero, 29 de febrero y 1 de marzo. En 2027, del 28 de febrero al 1 de marzo abarca solo un día transcurrido.",
              "La herramienta normaliza las fechas del calendario ingresadas a UTC para restarlas. Esto evita que un cambio de horario de verano convierta un intervalo de día natural normal en un día fraccionario. No es una calculadora de duraciones de vuelos ni de horas exactas entre marcas de tiempo específicas de zonas horarias."
            ],
            "table": {
              "headers": [
                "Fechas",
                "Transcurrido",
                "incluyendo inicio"
              ],
              "rows": [
                [
                  "1 de enero → 11 de enero",
                  "10 dias",
                  "11 dias"
                ],
                [
                  "Misma fecha",
                  "0 días",
                  "1 dia"
                ],
                [
                  "28 de febrero → 1 de marzo de 2028",
                  "2 dias",
                  "3 dias"
                ]
              ]
            }
          },
          {
            "heading": "Los días calendario no significan días hábiles",
            "paragraphs": [
              "Los sábados, domingos y festivos cuentan como días naturales. Para planificar las vacaciones, utilice una calculadora que conozca los días festivos y los días laborables sustitutos del país correspondiente. Una diferencia de fechas por sí sola no puede determinar cuántos días de licencia remunerada necesita.",
              "Los contratos y los plazos oficiales pueden definir de manera diferente el primer día, los cortes de fin de día y las extensiones de vacaciones. Consulte la regla que rige cuando sea importante no cumplir con una fecha límite. Para las cuentas regresivas y los aniversarios de todos los días, indique su convención de conteo junto con el resultado."
            ]
          }
        ],
        "faqs": [
          {
            "question": "¿Debo incluir el primer día?",
            "answer": "Inclúyalo cuando esa fecha cuente como el día 1 del período. Déjelo excluido al medir el intervalo transcurrido entre fechas. Una regla de un contrato o autoridad tiene prioridad sobre una convención de calendario general."
          },
          {
            "question": "¿30 días siempre equivalen a un mes?",
            "answer": "No. Los meses calendario tienen diferentes duraciones. Utilice fechas de inicio y finalización reales en lugar de convertir cada mes a 30 días."
          }
        ]
      },
      "stock-average": {
        "title": "Precio medio de acciones: cálculo ponderado con dos compras",
        "description": "Utilice un promedio ponderado para calcular un nuevo precio de compra promedio, el total de acciones y el monto invertido sin confundirlo con una elección de lote de impuestos.",
        "answer": "Sume las cantidades gastadas en las acciones nuevas y existentes, luego divida por el número total de acciones. El promedio simple de dos precios sólo funciona cuando las cantidades de las acciones son iguales.",
        "sections": [
          {
            "heading": "Pesar cada compra por su cantidad",
            "paragraphs": [
              "Nuevo precio de compra promedio = (cantidad existente × promedio existente + nueva cantidad × nuevo precio) ÷ cantidad total. Los precios y las cantidades deben utilizar la misma unidad de participación y moneda. Se pueden utilizar acciones fraccionarias cuando reflejen sus tenencias reales.",
              "Por ejemplo, 100 acciones compradas a 50 dólares y otras 100 compradas a 40 dólares cuestan 9.000 dólares en total. Divida entre 200 acciones para obtener US$ 45. Si la segunda compra es solo de 50 acciones a US$ 40, el total se convierte en US$ 7.000 entre 150 acciones, lo que da aproximadamente US$ 46,67, no US$ 45."
            ]
          },
          {
            "heading": "Un promedio más bajo no elimina una pérdida",
            "paragraphs": [
              "Inmediatamente después de comprar las 100 acciones adicionales a 40 dólares, una participación de 200 acciones con un valor de 40 dólares cada una tiene un valor de mercado de 8.000 dólares frente a los 9.000 dólares gastados. El precio promedio ha caído, pero persiste una diferencia no realizada de US$ 1.000 y hay más dinero expuesto a la inversión.",
              "Un movimiento de US$ 40 al promedio de US$ 45 sería un aumento de precio del 12,5% antes de tarifas. Eso es aritmética, no un pronóstico ni una razón para comprar. Aumentar la posición cambia la cantidad en riesgo así como el precio promedio."
            ],
            "table": {
              "headers": [
                "sosteniendo",
                "Acciones",
                "cantidad gastada"
              ],
              "rows": [
                [
                  "Existente: US$ 50/acción",
                  "100",
                  "US$ 5.000"
                ],
                [
                  "Nuevo: US$ 40/acción",
                  "100",
                  "US$ 4.000"
                ],
                [
                  "Promedio combinado: US$ 45",
                  "200",
                  "US$ 9.000"
                ]
              ]
            }
          },
          {
            "heading": "Mantenga los promedios de compras separados de los registros de impuestos",
            "paragraphs": [
              "La calculadora modela dos bloques de compras y excluye comisiones de corretaje, tipos de cambio, dividendos, ventas y acciones corporativas. Convierta registros de manera consistente antes de comparar compras realizadas en diferentes monedas.",
              "Un promedio aritmético de tenencia no es una determinación de la base del costo imponible. Las reglas de lotes fiscales y los métodos permitidos varían según la jurisdicción y el activo. Conserve los registros de transacciones originales del corredor en lugar de tratar este resultado como una instrucción de declaración de impuestos."
            ]
          }
        ],
        "faqs": [
          {
            "question": "¿Puedo usarlo al comprar a un precio más alto?",
            "answer": "Sí. Se aplica la misma fórmula de promedio ponderado. Comprar por encima de su promedio actual lo aumenta; el tamaño del cambio depende de la nueva cantidad."
          },
          {
            "question": "¿Por qué el promedio de mi corredor es diferente?",
            "answer": "En su cifra podrán incluirse comisiones, conversiones de moneda, redondeos, acciones corporativas o el método contable de un corredor. Esta herramienta utiliza únicamente los datos de precio y cantidad que se muestran."
          }
        ]
      },
      "compound": {
        "title": "Interés compuesto con aportaciones mensuales: fórmula y ejemplo",
        "description": "Comprenda los rendimientos anuales efectivos, las contribuciones de fin de mes y la diferencia entre el dinero aportado y el crecimiento hipotético de la inversión.",
        "answer": "Convierta el rendimiento anual efectivo a una tasa mensual, aumente el saldo existente y luego agregue la contribución del mes. Mantenga el dinero aportado separado del crecimiento para que un depósito mayor no se confunda con un mejor rendimiento.",
        "sections": [
          {
            "heading": "Convertir el supuesto anual consistentemente",
            "paragraphs": [
              "Myeotiji trata el rendimiento anual como una tasa anual efectiva. La tasa mensual es (1 + tasa anual)^(1/12) − 1. Al 5% anual, esa tasa mensual es aproximadamente 0,4074%, no exactamente 5% ÷ 12. Usar una tasa nominal cotizada dividida por 12 describiría una convención de capitalización diferente.",
              "Para cada mes, nuevo saldo = saldo anterior × (1 + tasa mensual) + contribución. Las contribuciones se agregan a fin de mes, por lo que el primer depósito obtiene retornos en los meses siguientes en lugar de antes de que se pague."
            ]
          },
          {
            "heading": "Consulte un ejemplo de un año separando los depósitos",
            "paragraphs": [
              "Comience con US$ 1.000, contribuya US$ 100 al final de cada mes y suponga un rendimiento anual efectivo constante del 5% durante un año. Los US$ 1.000 iniciales aumentan a US$ 1.050; los doce depósitos mensuales crecen a aproximadamente US$ 1.227,26. El total es aproximadamente US$ 2.277,26.",
              "Usted proporcionó US$ 2.200: US$ 1.000 inicialmente más doce depósitos de US$ 100. Los aproximadamente US$ 77,26 restantes son crecimiento modelado. Con un rendimiento del 0%, el saldo es exactamente de US$ 2.200. Esta comparación de retorno cero es útil para comprobar si las entradas tienen sentido."
            ],
            "table": {
              "headers": [
                "Escenario de un año",
                "Dinero suministrado",
                "Saldo estimado"
              ],
              "rows": [
                [
                  "0% de rentabilidad anual",
                  "US$ 2.200",
                  "US$ 2.200,00"
                ],
                [
                  "5% de rentabilidad anual efectiva",
                  "US$ 2.200",
                  "US$ 2.277,26"
                ]
              ]
            }
          },
          {
            "heading": "Utilice escenarios en lugar de un resultado prometido",
            "paragraphs": [
              "Compare los supuestos inferiores, medios y superiores manteniendo constantes los depósitos. Las inversiones reales no ofrecen un rendimiento mensual fluido y el orden de las ganancias y pérdidas es importante cuando se agrega o retira dinero.",
              "El resultado no deduce impuestos, cargas de inversión ni inflación. No es una cotización de depósito ni una previsión de una inversión específica. Si un banco o proveedor establece una tasa nominal, un momento de contribución diferente o un cronograma de capitalización diferente, alinee esas convenciones antes de comparar su ilustración con esta herramienta."
            ]
          }
        ],
        "faqs": [
          {
            "question": "¿Las aportaciones mensuales se realizan al inicio o al final del mes?",
            "answer": "Al final de cada mes modelado. Un cronograma de comienzo de mes le da a cada contribución un mes adicional de crecimiento y puede producir un saldo diferente."
          },
          {
            "question": "¿El resultado incluye impuestos o inflación?",
            "answer": "No. La salida es un hipotético equilibrio antes de esos efectos. Un saldo nominal y su poder adquisitivo futuro son cantidades diferentes."
          }
        ]
      },
      "unit-converter": {
        "title": "Cómo convertir unidades: longitud, temperatura y almacenamiento",
        "description": "Convierta medidas comunes mientras compara el volumen estadounidense versus el imperial, las compensaciones de temperatura y las unidades de almacenamiento decimal versus binaria.",
        "answer": "Convierta a través de una unidad base común y verifique primero la definición de la unidad. Un galón estadounidense difiere de un galón imperial y un gigabyte decimal difiere de un gibibyte. La temperatura también necesita una compensación, no sólo un multiplicador.",
        "sections": [
          {
            "heading": "Longitud, masa, área y volumen utilizan factores de conversión.",
            "paragraphs": [
              "Para unidades de la misma dimensión, convierta la cantidad de origen a una unidad base y divida por el factor de la unidad de destino. Una milla son 1,609344 kilómetros, por lo que 5 millas son 8,04672 kilómetros. No confunda un factor de longitud con un factor de área: las unidades cuadradas requieren una conversión al cuadrado.",
              "El menú de volumen utiliza explícitamente galones líquidos estadounidenses y tazas estadounidenses. Un galón líquido estadounidense equivale a 3,785411784 litros; no es el galón imperial más grande. La taza de una receta puede usar otra convención, así que revisa la receta o el recipiente medidor antes de aplicar un número."
            ]
          },
          {
            "heading": "La temperatura y el almacenamiento son trampas comunes",
            "paragraphs": [
              "Para grados Celsius a Fahrenheit use °F = °C × 9/5 + 32. Para el caso inverso use °C = (°F − 32) × 5/9. Es por eso que 100°F es aproximadamente 37,78°C en lugar de un resultado obtenido simplemente multiplicando 100 por 5/9.",
              "Las unidades de almacenamiento decimales utilizan potencias de 1000; las unidades binarias utilizan potencias de 1.024. Aquí 1 GB son 1.000.000.000 bytes, mientras que 1 GiB son 1.073.741.824 bytes. Se trata de cantidades de datos, no de velocidades de conexión a Internet ni de tiempos de transferencia de archivos."
            ],
            "table": {
              "headers": [
                "Entrada",
                "Valor convertido"
              ],
              "rows": [
                [
                  "1 milla",
                  "1,609344 kilometros"
                ],
                [
                  "1 galón líquido estadounidense",
                  "3.785411784L"
                ],
                [
                  "100°F",
                  "37,777…°C"
                ],
                [
                  "1 GB",
                  "1.073.741.824 B"
                ]
              ]
            }
          },
          {
            "heading": "Mantenga la precisión total hasta el último paso",
            "paragraphs": [
              "Elija una categoría, ingrese un valor y seleccione las unidades de origen y destino. La calculadora muestra hasta ocho decimales, por lo que una cantidad muy pequeña puede necesitar una unidad de destino más pequeña para seguir siendo legible.",
              "Redondear un factor de conversión antes de multiplicar puede magnificar un error. Para trabajos de fabricación con tolerancias, informes científicos o un estándar industrial prescrito, verifique la precisión requerida y la definición exacta utilizada en ese contexto."
            ]
          }
        ],
        "faqs": [
          {
            "question": "¿Puedo convertir gramos directamente a mililitros?",
            "answer": "No sin la densidad del material. Los gramos miden la masa y los mililitros miden el volumen; una conversión entre ellos no es un factor unitario universal."
          },
          {
            "question": "¿El galón del menú significa un galón imperial del Reino Unido?",
            "answer": "No. El menú está etiquetado como galón estadounidense y utiliza galones líquidos estadounidenses. Utilice la definición requerida por su material fuente."
          }
        ]
      },
      "age": {
        "title": "Cómo calcular la edad: cumpleaños, años cumplidos y días transcurridos",
        "description": "Calcule los años de edad cumplidos, distinga la edad de las diferencias entre años calendario y comprenda las convenciones de fecha local y cumpleaños bisiesto.",
        "answer": "Reste el año de nacimiento del año de referencia, luego reste uno si el cumpleaños aún no ha ocurrido ese año. Myeotiji utiliza la fecha del calendario de hoy en su navegador como fecha de referencia.",
        "sections": [
          {
            "heading": "Un año de diferencia no siempre es una edad completa",
            "paragraphs": [
              "Alguien nacido el 31 de diciembre de 2000 tiene 25 años el 30 de diciembre de 2026 y cumple 26 años el 31 de diciembre. Simplemente restar 2000 de 2026 un día antes exageraría la edad completa en uno.",
              "Compara primero el mes y luego el día. Si el mes de referencia es anterior al mes de nacimiento, reste un año. Si los meses coinciden pero el día de referencia es anterior, resta uno también. De lo contrario, mantenga la diferencia de año."
            ]
          },
          {
            "heading": "Comprender la fecha utilizada por la calculadora.",
            "paragraphs": [
              "Ingrese la fecha de nacimiento en la calculadora de edad. Utiliza la fecha actual del calendario local de su navegador y también informa los días calendario transcurridos desde el nacimiento. Las fechas de referencia en la tabla de esta guía son ilustraciones fijas; la herramienta en vivo no proporciona un campo separado de fecha de referencia histórica.",
              "Los usuarios en diferentes zonas horarias pueden ver diferentes edades alrededor de la medianoche de un cumpleaños. Los recuentos de días utilizan aritmética únicamente de fechas, en lugar de la hora exacta de nacimiento. Una fecha de nacimiento futura no es un ingreso válido de edad completa."
            ],
            "table": {
              "headers": [
                "fecha de nacimiento",
                "Fecha de referencia en el ejemplo",
                "edad cumplida"
              ],
              "rows": [
                [
                  "2000-12-31",
                  "2026-12-30",
                  "25"
                ],
                [
                  "2000-12-31",
                  "2026-12-31",
                  "26"
                ],
                [
                  "2000-12-31",
                  "2027-01-01",
                  "26"
                ]
              ]
            }
          },
          {
            "heading": "Las reglas de elegibilidad oficiales y de días bisiestos necesitan atención",
            "paragraphs": [
              "Para un cumpleaños del 29 de febrero, esta herramienta compara el mes y el día directamente. En un año no bisiesto, el recuento de años completos aumenta el 1 de marzo. Se trata de una convención de cálculo establecida, no de una decisión sobre la edad legal en cada jurisdicción.",
              "Una admisión, beneficio, contrato de seguro u otro proceso oficial puede utilizar una edad en una fecha específica o una regla especial de cumpleaños. Verifique la definición de ese proceso. Un resultado cotidiano de la edad actual no puede reemplazar su evaluación de elegibilidad."
            ]
          }
        ],
        "faqs": [
          {
            "question": "¿Por qué el resultado puede diferir del año mostrado en un calendario?",
            "answer": "La resta del año calendario ignora si ha ocurrido el cumpleaños. La edad completa cuenta los cumpleaños realmente cumplidos según la convención de fechas indicada."
          },
          {
            "question": "¿Puedo utilizar los días transcurridos divididos por 365?",
            "answer": "No para una edad exacta del año cumplido. Los años bisiestos y la posición del cumpleaños hacen que ese atajo no sea confiable en torno a los límites de edad."
          }
        ]
      }
    },
    "legalLabels": {
      "privacy": "Privacidad y cookies",
      "terms": "Uso y limitaciones",
      "contact": "Contacto y correcciones",
      "notice": "Estimaciones para información general. Este servicio no proporciona asesoramiento fiscal, legal, de nómina o de inversión individual, no prepara declaraciones ni lo representa. Verifique el año, la ubicación y las exclusiones indicados antes de confiar en un resultado.",
      "tracking": "Google Analytics está activado por defecto; puedes desactivarlo al pie de la página. No enviamos las entradas de las calculadoras. AdSense está conectado para solicitar anuncios no personalizados. Google y sus socios pueden usar cookies, balizas web, direcciones IP e identificadores para mostrar y medir anuncios. La visualización depende de la aprobación y configuración de la cuenta. Los anuncios no personalizados también pueden usar cookies. Las páginas chinas mantienen desactivados análisis y anuncios."
    },
    "legal": {
      "privacy": [
        [
          "Alcance y operador",
          "Myeotiji se opera desde Corea del Sur. Esta información corresponde a las páginas en español. Contacto: contact@myeotiji.kr. Otras secciones pueden usar ajustes de análisis diferentes."
        ],
        [
          "Entradas de la calculadora",
          "Los cálculos se ejecutan en su navegador. Esta versión no envía montos de calculadora, salarios, fechas o resultados a una base de datos del operador o servicio de análisis. No coloque datos personales en URL ni nos envíe documentos de identidad, detalles de cuentas o registros de nómina."
        ],
        [
          "Análisis, anuncios y cookies.",
          "Google Analytics está activado por defecto; puedes desactivarlo al pie de la página. No enviamos las entradas de las calculadoras. AdSense está conectado para solicitar anuncios no personalizados. Google y sus socios pueden usar cookies, balizas web, direcciones IP e identificadores para mostrar y medir anuncios. La visualización depende de la aprobación y configuración de la cuenta. Los anuncios no personalizados también pueden usar cookies. Las páginas chinas mantienen desactivados análisis y anuncios."
        ],
        [
          "Hospedaje necesario y procesamiento en el extranjero",
          "Vercel entrega y protege este sitio web. Las solicitudes necesariamente exponen información de conexión, como la dirección IP, la URL solicitada, la hora, los encabezados del dispositivo/navegador y las señales de seguridad a la infraestructura de alojamiento. Dicha información puede procesarse fuera de su país, incluso en los Estados Unidos u otras ubicaciones de infraestructura. Deshabilitar el análisis no elimina este procesamiento. Lo utilizamos para entrega, seguridad e investigación de fallos, no para perfiles publicitarios."
        ],
        [
          "Retención y tus elecciones",
          "Las entradas de la calculadora no las conservamos como registros del servidor. Los registros de alojamiento siguen la retención del proveedor y la configuración del proyecto aplicable; No hemos verificado un único período de retención fijo para todos los registros de infraestructura. Contáctenos para obtener los detalles aplicables o para solicitar acceso, corrección, eliminación o restricción cuando esté disponible según su ley. Evaluamos solicitudes y excepciones legales, y no prometemos que todos los registros de proveedores puedan eliminarse inmediatamente. Al cerrar la página se borra su estado de cálculo en memoria; su navegador puede conservar el historial o restaurar una pestaña."
        ],
        [
          "Correo electrónico y enlaces externos",
          "Si elige enviarnos un correo electrónico, recibiremos su dirección y mensaje para procesar la solicitud y conservaremos solo lo que sea necesario para ese propósito u obligaciones legales. Utilice ejemplos ficticios, no registros financieros personales reales. No se requiere correo electrónico para calcular. Las referencias oficiales abren sitios web de terceros con sus propias políticas. Los cambios en el seguimiento o el uso de datos requieren actualizar este aviso e implementar cualquier opción requerida legalmente antes de la activación."
        ]
      ],
      "terms": [
        [
          "Propósito",
          "Aritmética y explicaciones generales gratuitas y de autoservicio. No nos presentamos como su abogado, contador, preparador de impuestos, proveedor de nómina, asesor de inversiones o agencia gubernamental. Ninguna relación profesional-cliente se crea simplemente utilizando una calculadora."
        ],
        [
          "Verifique las suposiciones",
          "Los resultados son estimaciones para el año, jurisdicción y modelo indicados. El estado fiscal, las exenciones, los documentos del plan, las normas locales, el redondeo y el cambio de leyes pueden alterar los resultados reales. Un ejemplo no es garantía. Verifique con el servicio oficial correspondiente o profesional calificado antes de presentar, pagar salarios, invertir, donar o reservar viajes."
        ],
        [
          "Límites específicos",
          "Las horas extras en EE. UU. utilizan la base federal cubierta y no exenta, no todas las reglas estatales. El salario neto es un ejemplo anual simplificado, no un W-4 ni un cálculo de presentación. Una igualación 401(k) no es un saldo adquirido ni una recomendación de contribución. Las herramientas compuestas y de promedio de acciones no recomiendan valores ni garantizan rendimientos. Las herramientas de fecha y edad no deciden la elegibilidad legal ni los plazos."
        ],
        [
          "Errores y responsabilidad",
          "Informe un error sospechoso utilizando entradas ficticias y la URL afectada. Podemos corregir, advertir o restringir temporalmente una herramienta afectada cuando sus suposiciones no puedan verificarse. Este aviso describe el alcance; no excluye la responsabilidad que no puede excluirse legalmente, incluida la responsabilidad aplicable por mala conducta intencional o negligencia grave, ni elimina los derechos obligatorios del consumidor."
        ],
        [
          "Soporte y cambios",
          "El soporte maneja fallas técnicas y correcciones de fuentes generales. No solicite posiciones tributarias individuales, decisiones legales, preparación de presentaciones o representación. Dirigiremos dichas solicitudes a la autoridad pertinente o a un profesional calificado. Los cambios materiales se reflejan en la fecha de la página; Vuelva a verificar las suposiciones cada vez."
        ]
      ],
      "contact": [
        [
          "Problemas técnicos, correcciones y solicitudes de privacidad.",
          "Envíe un correo electrónico a contact@myeotiji.kr con la URL de la página, el año/región aplicable y un ejemplo ficticio que muestre el resultado esperado y mostrado. También puede solicitar información sobre el procesamiento de datos o ejercer los derechos de privacidad aplicables aquí. No requerimos una cuenta o un formulario."
        ],
        [
          "Mantenga su información segura",
          "No envíe por correo electrónico identificadores gubernamentales, cuentas bancarias, contraseñas, nóminas completas ni documentos fiscales reales. No ofrecemos consultas fiscales personales, legales o de inversión ni actuamos en su nombre. Para conocer una fecha límite de presentación, pago o empleo, comuníquese directamente con la autoridad pertinente o con un profesional calificado."
        ]
      ]
    },
    "policy": [
      {
        "heading": "Objeto y autoría",
        "text": "Myeotiji publica explicaciones de las calculadoras disponibles en este sitio. Estas guías se prepararon con la ayuda de la IA y se compararon con el método de cálculo indicado, ejemplos prácticos y referencias citadas. El nombre del autor identifica a Myeotiji como el servicio de publicación; no reclama la revisión por parte de un contador, abogado o asesor regulado designado."
      },
      {
        "heading": "Fuentes, fechas y normas aplicables",
        "text": "Para temas de derecho, impuestos, nóminas y seguridad social preferimos las publicaciones de las autoridades públicas responsables y los enlaces a los documentos pertinentes. Los términos del proveedor y los estándares técnicos se identifican como tales. Un ejemplo matemático escrito por Myeotiji es una ilustración, no una cita de una autoridad. La fecha de actualización visible registra una revisión del contenido material, no una actualización diaria automática. Importa el país, año y exclusiones que se indican en cada guía."
      },
      {
        "heading": "Lo que un cálculo puede y no puede establecer",
        "text": "Verificamos ejemplos numéricos representativos y condiciones de contorno. Los modelos simples aún omiten hechos que pueden cambiar un pago o derecho real. El crecimiento hipotético de la inversión no es un rendimiento prometido y una estimación de la nómina no es una evaluación fiscal final. Los ejemplos utilizan los supuestos mostrados; Los lectores deben verificar los registros reales del proveedor, empleador o autoridad antes de confiar en una cifra para tomar una decisión importante."
      },
      {
        "heading": "Correcciones y comentarios",
        "text": "Si encuentra una fórmula, fuente, traducción o ejemplo incorrecto, envíe la dirección de la página, los datos relevantes y el resultado que esperaba a nuestra dirección de contacto. No envíe documentos de identificación, extractos de pago completos, números de cuenta u otra información personal innecesaria. Podemos utilizar un ejemplo reproducible para investigar y actualizar la explicación."
      }
    ]
  },
  "pt-br": {
    "labels": {
      "home": "Calculadoras",
      "guides": "Guias de cálculo",
      "policy": "Como preparamos esses guias",
      "title": "Guias de cálculo: fórmulas e exemplos resolvidos",
      "description": "Cálculos práticos para datas, dinheiro e decisões do dia a dia. Escolha uma calculadora e veja a fórmula por trás da resposta.",
      "intro": "Comece com a pergunta que você deseja responder. Cada guia explica o método, funciona com números e links para uma calculadora que você pode usar com suas próprias entradas.",
      "global": "Dinheiro, datas e cálculos diários",
      "country": "Estados Unidos: salários, impostos e aposentadoria",
      "quick": "Resposta rápida",
      "contents": "Nesta página",
      "try": "Experimente a calculadora",
      "related": "Guias relacionados",
      "questions": "Perguntas comuns",
      "references": "Fontes e leituras adicionais",
      "updated": "Atualizado",
      "author": "Preparado por Myeotiji",
      "exampleNote": "Exemplos ilustram as suposições declaradas. As taxas reais, devoluções e valores da folha de pagamento podem ser diferentes.",
      "policyTitle": "Guias de cálculo Myeotiji: fontes e método editorial",
      "policyDescription": "Como Myeotiji explica cálculos, verifica exemplos, cita fontes e trata de correções e estimativas.",
      "calculatorLink": "Veja a fórmula, um exemplo resolvido e erros comuns →",
      "homeTitle": "Calculadoras financeiras e diárias gratuitas | Myeotiji",
      "homeHeading": "Calculadoras gratuitas para dinheiro, trabalho e vida cotidiana",
      "homeDescription": "Cálculos práticos para datas, dinheiro e decisões do dia a dia. Escolha uma calculadora e veja a fórmula por trás da resposta."
    },
    "guides": {
      "fee": {
        "title": "Como calcular taxas e quanto cobrar para receber o valor líquido desejado",
        "description": "Calcule a receita líquida após taxas percentuais e fixas e, em seguida, inverta a fórmula para encontrar a cobrança necessária para um pagamento desejado.",
        "answer": "Subtraia a taxa percentual e a taxa fixa da cobrança. Para receber um determinado valor após as taxas, divida a meta mais a taxa fixa por um menos a taxa percentual.",
        "sections": [
          {
            "heading": "Separe as duas partes da taxa",
            "paragraphs": [
              "Uma taxa percentual cresce com o valor arrecadado; uma taxa de transação fixa não. Escreva a porcentagem como decimal antes de multiplicar. Para uma taxa hipotética de 3%, use 0,03. Uma taxa fixa de 0,30 significa 30 centavos na moeda selecionada, e não outra porcentagem.",
              "Receita líquida = cobrança × (1 − taxa) − taxa fixa. Verifique a que valor o fornecedor aplica sua taxa: frete, impostos, conversão de moeda e cobranças internacionais podem ter tratamento separado. Este guia descreve a aritmética e não a tarifa atual de qualquer fornecedor."
            ]
          },
          {
            "heading": "Um exemplo prático: por que adicionar 3% não é suficiente",
            "paragraphs": [
              "Suponha que você receba R$ 100 e a taxa hipotética seja de 3% mais R$ 0,30. A parte percentual é de R$ 3; adicionar a parte fixa dá uma taxa de R$ 3,30 e uma receita líquida de R$ 96,70.",
              "Para receber R$ 100 líquidos, resolva a cobrança × 0,97 - 0,30 = 100. A cobrança não arredondada necessária é 100,30 ÷ 0,97, aproximadamente R$ 1.034.021. Adicionar 3% a R$ 100 dá R$ 103, cujo valor líquido é de apenas R$ 99,61. A diferença surge porque o provedor também cobra uma taxa sobre o aumento da cobrança."
            ],
            "table": {
              "headers": [
                "Carregar",
                "Taxa hipotética",
                "Rede"
              ],
              "rows": [
                [
                  "R$ 100,00",
                  "R$ 3,30",
                  "R$ 96,70"
                ],
                [
                  "R$ 103,00",
                  "R$ 3,39",
                  "R$ 99,61"
                ],
                [
                  "R$ 103,40",
                  "R$ 3.402 antes do arredondamento",
                  "R$ 99.998 antes do arredondamento"
                ]
              ]
            }
          },
          {
            "heading": "Use o resultado como uma verificação de preços",
            "paragraphs": [
              "Insira o valor arrecadado para um cálculo futuro ou selecione o modo líquido-alvo para um cálculo reverso. Mantenha a moeda selecionada consistente com sua taxa fixa. A seleção da moeda altera a formatação; ele não realiza uma conversão de taxa de câmbio.",
              "A tela arredonda o resultado para exibição. Se for necessário cumprir exatamente um pagamento mínimo, verifique o próximo menor incremento de moeda e as regras de arredondamento do seu provedor. Reembolsos, taxas mínimas, impostos sobre taxas e se sobretaxas são permitidas exigem verificações separadas."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Uma taxa de 0% sempre significa que receberei a cobrança integral?",
            "answer": "Somente se a taxa fixa também for zero e nenhuma outra dedução for aplicável. Uma taxa percentual de 0% mais uma taxa fixa de R$ 0,30 ainda deixa R$ 99,70 de uma cobrança de R$ 100."
          },
          {
            "question": "Posso comparar diferentes provedores de pagamento?",
            "answer": "Sim, insira a tarifa publicada e a tarifa fixa de cada provedor usando a mesma cobrança. Compare o resultado com quaisquer cobranças adicionais e os termos aplicáveis ​​à sua conta."
          }
        ]
      },
      "discount": {
        "title": "Descontos sucessivos: por que 20% mais 10% não são 30%",
        "description": "Calcule descontos sucessivos, compare combinações de cupões e diferencie a percentagem do preço final do valor poupado.",
        "answer": "Aplique o segundo desconto ao preço já reduzido. Um desconto de 20% seguido de 10% deixa 80% × 90% = 72% do preço original, então a economia total é de 28%.",
        "sections": [
          {
            "heading": "Multiplique o preço que você continua pagando",
            "paragraphs": [
              "Para cada desconto percentual, subtraia a taxa decimal de um. Multiplique o preço original pelas frações restantes. Com dois descontos, preço final = original × (1 − primeira tarifa) × (1 − segunda tarifa). Desconto efetivo = 1 − preço final ÷ preço original.",
              "A adição das taxas trataria ambos os descontos como se fossem aplicados ao preço original. Essa é uma oferta diferente. Uma loja que promete uma redução única de 30% está proporcionando uma redução percentual maior do que reduções sucessivas de 20% e 10%, antes que outros termos sejam considerados."
            ]
          },
          {
            "heading": "Compare duas ofertas em um item de R$ 100",
            "paragraphs": [
              "Após a primeira redução de 20%, o item custa R$ 80. A segunda redução de 10% remove R$ 8, restando R$ 72. A economia total é de R$ 28. Inverter a ordem de dois descontos percentuais puros dá o mesmo resultado matemático, porque os fatores de preço restantes se multiplicam.",
              "Essa regra de pedido não se estende automaticamente a um cupom de valor fixo. Um cupom de R$ 10 após 20% de desconto em um item de R$ 100 dá R$ 70. Tirar R$ 10 primeiro e depois aplicar 20% dá R$ 72. Gastos mínimos, limites e produtos excluídos podem alterar qual oferta pode realmente ser usada."
            ],
            "table": {
              "headers": [
                "Oferta",
                "Preço final",
                "Salvando"
              ],
              "rows": [
                [
                  "20%, depois 10%",
                  "R$ 72",
                  "28%"
                ],
                [
                  "Um desconto de 30%",
                  "R$ 70",
                  "30%"
                ],
                [
                  "20%, depois um cupom de R$ 10",
                  "R$ 70",
                  "R$ 30"
                ]
              ]
            }
          },
          {
            "heading": "Insira a redução anunciada, não o preço restante",
            "paragraphs": [
              "Os campos da calculadora recebem porcentagens de desconto. Uma etiqueta dizendo pague 80% do preço original significa um desconto de 20%. Inserir 80 calcularia, em vez disso, uma redução de 80%.",
              "A ferramenta modela duas reduções percentuais sucessivas. Não adiciona imposto sobre vendas, entrega, reembolso ou cupons fixos. Compare os totais de finalização da compra quando esses itens forem diferentes e leve em consideração o arredondamento real do vendedor em cada etapa."
            ]
          }
        ],
        "faqs": [
          {
            "question": "50% de desconto é seguido de 50% de desconto grátis?",
            "answer": "Não. Metade do preço original permanece após a primeira redução e metade disso permanece após a segunda. Você paga 25% do preço original, uma economia de 75%."
          },
          {
            "question": "Porque é que a poupança no meu recibo difere ligeiramente?",
            "answer": "Um varejista pode arredondar cada item ou desconto separadamente ou aplicar descontos a diferentes valores elegíveis. Esta calculadora usa as duas porcentagens indicadas antes de exibir um resultado arredondado."
          }
        ]
      },
      "days": {
        "title": "Dias entre datas: incluir o primeiro dia e contar anos bissextos",
        "description": "Entenda os dias decorridos versus contagens de datas inclusivas, dias bissextos, fins de semana e por que uma ferramenta de dias corridos é diferente de uma calculadora de prazos.",
        "answer": "Para dias corridos decorridos, subtraia a data de início da data de término. Se o dia inicial for o dia 1, adicione um para um intervalo de datas futuro. De 1º a 11 de janeiro são 10 dias decorridos ou 11 dias inclusive.",
        "sections": [
          {
            "heading": "Escolha primeiro a convenção de contagem",
            "paragraphs": [
              "Uma estadia de segunda a terça-feira abrange uma noite, mas abrange duas datas do calendário. Ambos os números podem estar corretos porque respondem a perguntas diferentes. Decida se deseja dias decorridos ou o número de datas incluídas em um período antes de comparar os resultados.",
              "Para um intervalo ascendente, a opção include-start da calculadora adiciona um dia. A mesma data de início e término fornece, portanto, zero dias decorridos ou um dia inclusivo. Uma data de término anterior à data de início fornece um intervalo negativo; reverter as datas quando desejar um período a termo normal."
            ]
          },
          {
            "heading": "Trabalhe com um exemplo de ano bissexto",
            "paragraphs": [
              "Em 2028, de 28 de fevereiro a 1º de março abrange dois dias decorridos porque 29 de fevereiro fica entre eles. A contagem inclusiva fornece três datas de calendário: 28 de fevereiro, 29 de fevereiro e 1º de março. Em 2027, de 28 de fevereiro a 1º de março abrange apenas um dia decorrido.",
              "A ferramenta normaliza as datas do calendário inseridas para UTC para subtração. Isso evita que uma mudança no relógio de verão transforme um intervalo de um dia normal em um dia fracionário. Não é uma calculadora para durações de voos ou horas exatas entre carimbos de data/hora específicos de fuso horário."
            ],
            "table": {
              "headers": [
                "Datas",
                "Decorrido",
                "Incluindo início"
              ],
              "rows": [
                [
                  "1º de janeiro → 11 de janeiro",
                  "10 dias",
                  "11 dias"
                ],
                [
                  "Mesma data",
                  "0 dias",
                  "1 dia"
                ],
                [
                  "28 de fevereiro → 1º de março de 2028",
                  "2 dias",
                  "3 dias"
                ]
              ]
            }
          },
          {
            "heading": "Dias corridos não significam dias úteis",
            "paragraphs": [
              "Sábados, domingos e feriados contam como dias corridos. Para planejar as férias, use uma calculadora que conheça os feriados do país relevante e os dias úteis substitutos. A diferença de data por si só não pode estabelecer quantos dias de licença remunerada você precisa.",
              "Contratos e prazos oficiais podem definir o primeiro dia, os limites do final do dia e as prorrogações de feriados de forma diferente. Verifique a regra aplicável quando um prazo perdido for importante. Para contagens regressivas diárias e aniversários, indique sua convenção de contagem junto com o resultado."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Devo incluir o primeiro dia?",
            "answer": "Inclua-o quando essa data contar como o primeiro dia do período. Deixe-o excluído ao medir o intervalo decorrido entre as datas. Uma regra de um contrato ou autoridade tem prioridade sobre uma convenção geral do calendário."
          },
          {
            "question": "30 dias sempre equivalem a um mês?",
            "answer": "Não. Os meses civis têm durações diferentes. Use datas reais de início e término em vez de converter todos os meses para 30 dias."
          }
        ]
      },
      "stock-average": {
        "title": "Preço médio de ações: como calcular após uma nova compra",
        "description": "Use uma média ponderada para calcular um novo preço médio de compra, total de ações e valor investido, sem confundi-lo com uma eleição de lote fiscal.",
        "answer": "Some os valores gastos nas ações existentes e novas e divida pelo número total de ações. A média simples de dois preços só funciona quando as quantidades das ações são iguais.",
        "sections": [
          {
            "heading": "Pese cada compra pela sua quantidade",
            "paragraphs": [
              "Novo preço médio de compra = (quantidade existente × média existente + nova quantidade × novo preço) ÷ quantidade total. Os preços e quantidades devem utilizar a mesma unidade de participação e moeda. As ações fracionárias podem ser usadas quando refletem suas participações reais.",
              "Por exemplo, 100 ações compradas a R$ 50 e outras 100 compradas a R$ 40 custam R$ 9.000 no total. Divida por 200 ações para obter R$ 45. Se a segunda compra for de apenas 50 ações a R$ 40, o total será de R$ 7.000 em 150 ações, dando aproximadamente R$ 46,67, e não R$ 45."
            ]
          },
          {
            "heading": "Uma média mais baixa não elimina uma perda",
            "paragraphs": [
              "Imediatamente após comprar as 100 ações adicionais a R$ 40, uma participação de 200 ações no valor de R$ 40 por ação tem um valor de mercado de R$ 8.000 contra os R$ 9.000 gastos. O preço médio caiu, mas permanece uma diferença não realizada de R$ 1.000 e mais dinheiro fica exposto ao investimento.",
              "Uma mudança de R$ 40 para a média de R$ 45 representaria um aumento de preço de 12,5% antes das taxas. Isso é aritmética, não uma previsão ou uma razão para comprar. O aumento da posição altera o valor em risco, bem como o preço médio."
            ],
            "table": {
              "headers": [
                "Segurando",
                "Ações",
                "Valor gasto"
              ],
              "rows": [
                [
                  "Existente: R$ 50 / ação",
                  "100",
                  "R$ 5.000"
                ],
                [
                  "Novo: R$ 40/ação",
                  "100",
                  "R$ 4.000"
                ],
                [
                  "Média combinada: R$ 45",
                  "200",
                  "R$ 9.000"
                ]
              ]
            }
          },
          {
            "heading": "Mantenha as médias de compras separadas dos registros fiscais",
            "paragraphs": [
              "A calculadora modela dois blocos de compras e exclui taxas de corretagem, taxas de câmbio, dividendos, vendas e ações corporativas. Converta registros de forma consistente antes de comparar compras feitas em moedas diferentes.",
              "Uma média aritmética de retenção não é uma determinação da base de custo tributável. As regras do lote fiscal e os métodos permitidos variam de acordo com a jurisdição e o ativo. Mantenha os registros originais das transações do corretor, em vez de tratar esse resultado como uma instrução de declaração de impostos."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Posso usá-lo ao comprar por um preço mais alto?",
            "answer": "Sim. A mesma fórmula de média ponderada se aplica. Comprar acima da média existente aumenta-a; o tamanho da mudança depende da nova quantidade."
          },
          {
            "question": "Por que a média da minha corretora é diferente?",
            "answer": "Taxas, conversões de moeda, arredondamentos, ações corporativas ou método contábil de uma corretora podem ser incluídos em seu valor. Esta ferramenta utiliza apenas os dados de preço e quantidade mostrados."
          }
        ]
      },
      "compound": {
        "title": "Juros compostos com aportes mensais: fórmula e exemplo resolvido",
        "description": "Entenda os retornos anuais efetivos, as contribuições no final do mês e a diferença entre o dinheiro contribuído e o crescimento hipotético do investimento.",
        "answer": "Converta o retorno anual efetivo em uma taxa mensal, aumente o saldo existente e adicione a contribuição do mês. Mantenha o dinheiro contribuído separado do crescimento para que um depósito maior não seja confundido com um retorno melhor.",
        "sections": [
          {
            "heading": "Converta a suposição anual de forma consistente",
            "paragraphs": [
              "Myeotiji trata o retorno anual como uma taxa anual efetiva. A taxa mensal é (1 + taxa anual)^(1/12) − 1. A 5% ao ano, essa taxa mensal é de cerca de 0,4074%, não exatamente 5% ÷ 12. Usar uma taxa nominal cotada dividida por 12 descreveria uma convenção de capitalização diferente.",
              "Para cada mês, saldo novo = saldo anterior × (1 + taxa mensal) + contribuição. As contribuições são adicionadas no final do mês, de modo que o primeiro depósito rende retornos nos meses subsequentes, e não antes de ser pago."
            ]
          },
          {
            "heading": "Confira um exemplo de um ano separando os depósitos",
            "paragraphs": [
              "Comece com R$ 1.000, contribua com R$ 100 no final de cada mês e assuma um retorno anual efetivo constante de 5% durante um ano. Os R$ 1.000 iniciais crescem para R$ 1.050; os doze depósitos mensais aumentam para aproximadamente R$ 1.227,26. O total é de aproximadamente R$ 2.277,26.",
              "Você forneceu R$ 2.200: R$ 1.000 inicialmente mais doze depósitos de R$ 100. Os aproximadamente R$ 77,26 restantes são crescimento modelado. Com um retorno de 0%, o saldo é de exatamente R$ 2.200. Esta comparação de retorno zero é útil para verificar se as entradas fazem sentido."
            ],
            "table": {
              "headers": [
                "Cenário de um ano",
                "Dinheiro fornecido",
                "Saldo estimado"
              ],
              "rows": [
                [
                  "0% de retorno anual",
                  "R$ 2.200",
                  "R$ 2.200,00"
                ],
                [
                  "5% de retorno anual efetivo",
                  "R$ 2.200",
                  "R$ 2.277,26"
                ]
              ]
            }
          },
          {
            "heading": "Use cenários em vez de um resultado prometido",
            "paragraphs": [
              "Compare as suposições inferiores, médias e superiores, mantendo os depósitos constantes. Os investimentos reais não proporcionam um retorno mensal uniforme, e a ordem dos ganhos e perdas é importante quando o dinheiro é adicionado ou retirado.",
              "O resultado não deduz impostos, encargos de investimento ou inflação. Não é uma cotação de depósito nem uma previsão de um investimento específico. Se um banco ou fornecedor declarar uma taxa nominal, um calendário de contribuição diferente ou um calendário de capitalização diferente, alinhe essas convenções antes de comparar a sua ilustração com esta ferramenta."
            ]
          }
        ],
        "faqs": [
          {
            "question": "As contribuições mensais são feitas no início ou no final do mês?",
            "answer": "No final de cada mês modelado. Um cronograma de início de mês dá a cada contribuição um mês extra de crescimento e pode produzir um equilíbrio diferente."
          },
          {
            "question": "O resultado inclui impostos ou inflação?",
            "answer": "Não. O resultado é um equilíbrio hipotético antes desses efeitos. Um saldo nominal e seu poder de compra futuro são quantidades diferentes."
          }
        ]
      },
      "unit-converter": {
        "title": "Conversão de unidades: temperatura, comprimento e armazenamento",
        "description": "Converta medições comuns enquanto verifica o volume americano versus imperial, compensações de temperatura e unidades de armazenamento decimais versus binárias.",
        "answer": "Converta através de uma unidade base comum e verifique primeiro a definição da unidade. Um galão americano difere de um galão imperial e um gigabyte decimal difere de um gibibyte. A temperatura também precisa de uma compensação, não apenas de um multiplicador.",
        "sections": [
          {
            "heading": "Fatores de conversão de comprimento, massa, área e volume",
            "paragraphs": [
              "Para unidades da mesma dimensão, converta a quantidade de origem em uma unidade base e divida pelo fator da unidade de destino. Uma milha equivale a 1,609344 quilômetros, então 5 milhas equivalem a 8,04672 quilômetros. Não confunda um fator de comprimento com um fator de área: unidades quadradas requerem uma conversão quadrada.",
              "O menu de volume usa explicitamente galões líquidos e xícaras americanas. Um galão líquido americano equivale a 3,785411784 litros; não é o galão imperial maior. O copo de uma receita pode usar outra convenção, portanto verifique a receita ou o recipiente de medição antes de aplicar um número."
            ]
          },
          {
            "heading": "Temperatura e armazenamento são armadilhas comuns",
            "paragraphs": [
              "Para Celsius a Fahrenheit use °F = °C × 9/5 + 32. Para o inverso use °C = (°F - 32) × 5/9. É por isso que 100°F é aproximadamente 37,78°C, em vez de um resultado obtido pela multiplicação de 100 por 5/9 apenas.",
              "As unidades de armazenamento decimal usam potências de 1.000; unidades binárias usam potências de 1.024. Aqui, 1 GB equivale a 1.000.000.000 bytes, enquanto 1 GiB equivale a 1.073.741.824 bytes. Estas são quantidades de dados, não velocidades de conexão à Internet ou tempos de transferência de arquivos."
            ],
            "table": {
              "headers": [
                "Entrada",
                "Valor convertido"
              ],
              "rows": [
                [
                  "1 milha",
                  "1,609344 quilômetros"
                ],
                [
                  "1 galão líquido americano",
                  "3,785411784L"
                ],
                [
                  "100°F",
                  "37,777…ºC"
                ],
                [
                  "1 GiB",
                  "1.073.741.824 B"
                ]
              ]
            }
          },
          {
            "heading": "Mantenha total precisão até a última etapa",
            "paragraphs": [
              "Escolha uma categoria, insira um valor e selecione as unidades de origem e destino. A calculadora exibe até oito casas decimais, portanto, uma quantidade muito pequena pode precisar de uma unidade de destino menor para permanecer legível.",
              "Arredondar um fator de conversão antes de multiplicar pode ampliar um erro. Para trabalhos de fabricação tolerados, relatórios científicos ou padrões industriais prescritos, verifique a precisão exigida e a definição exata usada nesse contexto."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Posso converter gramas diretamente em mililitros?",
            "answer": "Não sem a densidade do material. Gramas medem massa e mililitros medem volume; uma conversão entre eles não é um fator unitário universal."
          },
          {
            "question": "O galão do menu significa um galão imperial do Reino Unido?",
            "answer": "Não. O menu é rotulado como US gal e usa o galão líquido dos EUA. Use a definição exigida pelo seu material de origem."
          }
        ]
      },
      "age": {
        "title": "Como calcular a idade: aniversário, anos completos e dias de vida",
        "description": "Calcule os anos completos de idade, distinga a idade das diferenças do ano civil e entenda as convenções de data local e aniversário bissexto.",
        "answer": "Subtraia o ano de nascimento do ano de referência e subtraia um se o aniversário ainda não tiver acontecido naquele ano. Myeotiji usa a data do calendário de hoje em seu navegador como data de referência.",
        "sections": [
          {
            "heading": "Uma diferença de ano nem sempre é uma idade completa",
            "paragraphs": [
              "Alguém nascido em 31 de dezembro de 2000 tem 25 anos em 30 de dezembro de 2026 e completa 26 anos em 31 de dezembro. Simplesmente subtrair 2.000 de 2.026 um dia antes seria exagerar a idade completa em um.",
              "Compare primeiro o mês e depois o dia. Se o mês de referência for anterior ao mês de nascimento, subtrair um ano. Se os meses coincidirem, mas o dia de referência for anterior, subtraia também um. Caso contrário, mantenha a diferença do ano."
            ]
          },
          {
            "heading": "Entenda a data usada pela calculadora",
            "paragraphs": [
              "Insira a data de nascimento na calculadora de idade. Ele usa a data atual do calendário local do seu navegador e também relata os dias decorridos desde o nascimento. As datas de referência na tabela deste guia são ilustrações fixas; a ferramenta ativa não fornece um campo separado de data de referência histórica.",
              "Usuários em fusos horários diferentes podem ver idades diferentes por volta da meia-noite de um aniversário. A contagem de dias usa aritmética apenas de data, em vez da hora exata do nascimento. Uma data de nascimento futura não é uma entrada válida de idade completa."
            ],
            "table": {
              "headers": [
                "Data de nascimento",
                "Data de referência no exemplo",
                "Idade completada"
              ],
              "rows": [
                [
                  "31/12/2000",
                  "30/12/2026",
                  "25"
                ],
                [
                  "31/12/2000",
                  "31/12/2026",
                  "26"
                ],
                [
                  "31/12/2000",
                  "01/01/2027",
                  "26"
                ]
              ]
            }
          },
          {
            "heading": "As regras de elegibilidade oficial e do dia bissexto precisam de cuidados",
            "paragraphs": [
              "Para aniversários de 29 de fevereiro, esta ferramenta compara mês e dia diretamente. Num ano não bissexto, a contagem de anos completos aumenta em 1º de março. Essa é uma convenção declarada de calculadora, e não uma decisão sobre a idade legal em todas as jurisdições.",
              "Uma admissão, benefício, contrato de seguro ou outro processo oficial pode usar uma idade em uma data específica ou uma regra especial de aniversário. Verifique a definição desse processo. Um resultado diário da idade atual não pode substituir a sua avaliação de elegibilidade."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Por que o resultado pode ser diferente do ano mostrado no calendário?",
            "answer": "A subtração do ano civil ignora se o aniversário aconteceu. A idade completa conta os aniversários realmente alcançados de acordo com a convenção de data declarada."
          },
          {
            "question": "Posso usar os dias decorridos divididos por 365?",
            "answer": "Não para uma idade exata de um ano completo. Os anos bissextos e a posição do aniversário tornam esse atalho pouco confiável em relação aos limites de idade."
          }
        ]
      }
    },
    "legalLabels": {
      "privacy": "Privacidade e cookies",
      "terms": "Uso e limitações",
      "contact": "Contato e correções",
      "notice": "Estimativas para informações gerais. Este serviço não fornece consultoria tributária, jurídica, de folha de pagamento ou de investimento individual, não prepara retornos nem representa você. Verifique o ano indicado, local e exclusões antes de confiar no resultado.",
      "tracking": "Google Analytics está ativo por padrão e pode ser desativado no rodapé. Não enviamos os valores das calculadoras. AdSense está conectado para solicitar anúncios não personalizados. Google e parceiros podem usar cookies, web beacons, endereços IP e identificadores para entregar e medir anúncios. A exibição depende de aprovação e configurações da conta. Anúncios não personalizados também podem usar cookies. As páginas chinesas mantêm análise e anúncios desativados."
    },
    "legal": {
      "privacy": [
        [
          "Escopo e operador",
          "O Myeotiji é operado da Coreia do Sul. Este aviso se aplica às páginas em português do Brasil. Contato: contact@myeotiji.kr. Outras seções podem ter configurações de análise diferentes."
        ],
        [
          "Entradas da calculadora",
          "Os cálculos são executados no seu navegador. Esta versão não envia valores de calculadora, salário, datas ou resultados para um banco de dados de operadora ou serviço de análise. Não coloque dados pessoais em URLs nem nos envie documentos de identidade, detalhes de contas ou registros de folha de pagamento."
        ],
        [
          "Análise, anúncios e cookies",
          "Google Analytics está ativo por padrão e pode ser desativado no rodapé. Não enviamos os valores das calculadoras. AdSense está conectado para solicitar anúncios não personalizados. Google e parceiros podem usar cookies, web beacons, endereços IP e identificadores para entregar e medir anúncios. A exibição depende de aprovação e configurações da conta. Anúncios não personalizados também podem usar cookies. As páginas chinesas mantêm análise e anúncios desativados."
        ],
        [
          "Hospedagem necessária e processamento no exterior",
          "A Vercel entrega e protege este site. As solicitações expõem necessariamente informações de conexão, como endereço IP, URL solicitada, hora, cabeçalhos de dispositivo/navegador e sinais de segurança para a infraestrutura de hospedagem. Essas informações podem ser processadas fora do seu país, inclusive nos Estados Unidos ou em outros locais de infraestrutura. Desabilitar a análise não remove esse processamento. Nós o usamos para entrega, segurança e investigação de falhas, não para perfis de publicidade."
        ],
        [
          "Retenção e suas escolhas",
          "As entradas da calculadora não são retidas por nós como registros do servidor. Os registros de hospedagem seguem a retenção do provedor e as configurações aplicáveis ​​do projeto; não verificamos um único período de retenção fixo para todos os logs de infraestrutura. Entre em contato conosco para obter os detalhes aplicáveis ​​ou para solicitar acesso, correção, exclusão ou restrição, quando disponível de acordo com sua lei. Avaliamos solicitações e exceções legais e não prometemos que todos os registros do provedor possam ser excluídos imediatamente. Fechar a página limpa seu estado de cálculo na memória; seu navegador pode preservar o histórico ou restaurar uma guia."
        ],
        [
          "E-mail e links externos",
          "Caso opte por nos enviar um email, receberemos a sua morada e mensagem para tratamento do pedido e reteremos apenas o necessário para o efeito ou obrigações legais. Use exemplos fictícios, não registros financeiros pessoais reais. O e-mail não é necessário para calcular. As referências oficiais abrem sites de terceiros com políticas próprias. As alterações no rastreamento ou no uso de dados exigem a atualização deste aviso e a implementação de quaisquer opções legalmente exigidas antes da ativação."
        ]
      ],
      "terms": [
        [
          "Objetivo",
          "Explicações aritméticas e gerais gratuitas e de autoatendimento. Não nos apresentamos como seu advogado, contador, preparador de impostos, provedor de folha de pagamento, consultor de investimentos ou agência governamental. Nenhuma relação profissional-cliente é criada apenas com o uso de uma calculadora."
        ],
        [
          "Verifique as suposições",
          "Os resultados são estimativas para o ano, jurisdição e modelo declarados. Situação fiscal, isenções, documentos de planejamento, regras locais, arredondamentos e alterações na lei podem alterar os resultados reais. Um exemplo não é uma garantia. Verifique com o serviço oficial competente ou profissional qualificado antes de registrar, pagar salários, investir, doar ou reservar viagens."
        ],
        [
          "Limites específicos",
          "As horas extras dos EUA usam a linha de base federal coberta e não isenta, e não todas as regras estaduais. O pagamento líquido é uma ilustração anual simplificada, não um W-4 ou cálculo de arquivamento. Uma correspondência 401(k) não é um saldo adquirido ou uma recomendação de contribuição. As ferramentas médias e compostas de ações não recomendam títulos nem garantem retornos. As ferramentas de data e idade não decidem a elegibilidade legal ou prazos."
        ],
        [
          "Erros e responsabilidade",
          "Relate uma suspeita de erro usando entradas fictícias e o URL afetado. Poderemos corrigir, alertar ou restringir temporariamente uma ferramenta afetada quando as suas suposições não puderem ser verificadas. Este aviso descreve o escopo; não exclui a responsabilidade que não pode ser legalmente excluída, incluindo a responsabilidade aplicável por má conduta intencional ou negligência grave, nem remove os direitos obrigatórios do consumidor."
        ],
        [
          "Suporte e mudanças",
          "O suporte lida com falhas técnicas e correções gerais de origem. Não solicite posições fiscais individuais, decisões legais, preparação de arquivamento ou representação. Direcionaremos tais solicitações à autoridade competente ou a um profissional qualificado. As alterações materiais são refletidas na data da página; verifique novamente as suposições a cada vez."
        ]
      ],
      "contact": [
        [
          "Problemas técnicos, correções e solicitações de privacidade",
          "Envie um e-mail para contact@myeotiji.kr com o URL da página, ano/região aplicável e um exemplo fictício mostrando o resultado esperado e exibido. Você também pode solicitar informações sobre o processamento de dados ou exercer os direitos de privacidade aplicáveis ​​aqui. Não exigimos uma conta ou formulário."
        ],
        [
          "Mantenha suas informações seguras",
          "Não envie por e-mail identificadores governamentais, contas bancárias, senhas, recibos de vencimento completos ou documentos fiscais reais. Não oferecemos consultas fiscais, jurídicas ou de investimento pessoais, nem agimos em seu nome. Para obter um prazo de arquivamento, pagamento ou contratação, entre em contato diretamente com a autoridade competente ou profissional qualificado."
        ]
      ]
    },
    "policy": [
      {
        "heading": "Objetivo e autoria",
        "text": "Myeotiji publica explicações sobre as calculadoras disponíveis neste site. Esses guias foram preparados com assistência de IA e verificados em relação ao método de cálculo declarado, exemplos trabalhados e referências citadas. O nome do autor identifica Myeotiji como o serviço de publicação; não exige revisão por um contador, advogado ou consultor regulamentado nomeado."
      },
      {
        "heading": "Fontes, datas e regras aplicáveis",
        "text": "Para temas jurídicos, tributários, trabalhistas e previdenciários, preferimos as publicações da autoridade pública responsável e o link para os documentos relevantes. Os termos e padrões técnicos do fornecedor são identificados como tal. Um exemplo matemático escrito por Myeotiji é uma ilustração, não uma citação de uma autoridade. A data de atualização visível registra uma revisão de conteúdo material, não uma atualização diária automática. O país, ano e exclusões indicados em cada guia são importantes."
      },
      {
        "heading": "O que um cálculo pode e não pode estabelecer",
        "text": "Verificamos exemplos numéricos representativos e condições de contorno. Os modelos simples ainda omitem factos que podem alterar um pagamento ou direito real. O crescimento hipotético do investimento não é um retorno prometido e uma estimativa da folha de pagamento não é uma avaliação fiscal final. Os exemplos usam as suposições mostradas; os leitores devem verificar os registros reais do fornecedor, do empregador ou da autoridade antes de confiar em um número para uma decisão consequente."
      },
      {
        "heading": "Correções e comentários",
        "text": "Se você encontrar uma fórmula, fonte, tradução ou exemplo incorreto, envie o endereço da página, as informações relevantes e o resultado esperado para o nosso endereço de contato. Não envie documentos de identificação, extratos de pagamento completos, números de contas ou outras informações pessoais desnecessárias. Podemos usar um exemplo reproduzível para investigar e atualizar a explicação."
      }
    ]
  },
  "id": {
    "labels": {
      "home": "Kalkulator",
      "guides": "Panduan perhitungan",
      "policy": "Bagaimana kami mempersiapkan panduan ini",
      "title": "Panduan Perhitungan: Rumus & Contoh Kerja",
      "description": "Perhitungan praktis untuk tanggal, uang, dan keputusan sehari-hari. Pilih kalkulator dan lihat rumus di balik jawabannya.",
      "intro": "Mulailah dengan pertanyaan yang ingin Anda jawab. Setiap panduan menjelaskan metodenya, menggunakan angka-angka dan tautan ke kalkulator yang dapat Anda gunakan dengan masukan Anda sendiri.",
      "global": "Uang, tanggal & perhitungan sehari-hari",
      "country": "Amerika Serikat: gaji, pajak & pensiun",
      "quick": "Jawaban cepat",
      "contents": "Di halaman ini",
      "try": "Coba kalkulator",
      "related": "Panduan terkait",
      "questions": "Pertanyaan umum",
      "references": "Sumber & bacaan lebih lanjut",
      "updated": "Diperbarui",
      "author": "Disiapkan oleh Myeotiji",
      "exampleNote": "Contoh menggambarkan asumsi yang dinyatakan. Biaya aktual, pengembalian, dan jumlah gaji dapat berbeda.",
      "policyTitle": "Panduan Perhitungan Myeotiji: Sumber & Metode Editorial",
      "policyDescription": "Bagaimana Myeotiji menjelaskan perhitungan, memeriksa contoh, mengutip sumber dan menangani koreksi dan perkiraan.",
      "calculatorLink": "Lihat rumusnya, contoh kerja dan kesalahan umum →",
      "homeTitle": "Kalkulator Keuangan & Sehari-hari Gratis | Myeotiji",
      "homeHeading": "Kalkulator gratis untuk uang, pekerjaan, dan kehidupan sehari-hari",
      "homeDescription": "Perhitungan praktis untuk tanggal, uang, dan keputusan sehari-hari. Pilih kalkulator dan lihat rumus di balik jawabannya."
    },
    "guides": {
      "fee": {
        "title": "Cara menghitung biaya transaksi dan harga agar menerima jumlah bersih",
        "description": "Hitung hasil bersih setelah persentase dan biaya tetap, lalu balikkan rumus untuk menemukan biaya yang diperlukan untuk target pembayaran.",
        "answer": "Kurangi biaya persentase dan biaya tetap dari biaya tersebut. Untuk menerima jumlah tertentu setelah biaya, bagi target ditambah biaya tetap dengan satu dikurangi persentase.",
        "sections": [
          {
            "heading": "Pisahkan kedua bagian biayanya",
            "paragraphs": [
              "Persentase biaya bertambah seiring dengan jumlah yang dikumpulkan; biaya transaksi tetap tidak. Tulis persentasenya dalam desimal sebelum dikalikan. Untuk biaya hipotetis 3%, gunakan 0,03. Biaya tetap 0,30 berarti 30 sen dalam mata uang yang Anda pilih, bukan persentase lainnya.",
              "Hasil bersih = jumlah tagihan × (1 − tarif) − biaya tetap. Periksa berapa tarif yang dikenakan penyedia: pengiriman, pajak, konversi mata uang, dan biaya lintas batas mungkin memiliki perlakuan terpisah. Panduan ini menjelaskan aritmatika, bukan tarif penyedia mana pun saat ini."
            ]
          },
          {
            "heading": "Contoh yang berhasil: mengapa menambahkan 3% saja tidak cukup",
            "paragraphs": [
              "Misalkan Anda mengumpulkan Rp 100 dan biaya hipotetisnya adalah 3% ditambah Rp 0,30. Bagian persentasenya adalah Rp 3; menambahkan bagian tetap memberikan biaya Rp 3,30 dan hasil bersih Rp 96,70.",
              "Untuk menerima Rp 100 bersih, selesaikan tagihan × 0,97 − 0,30 = 100. Biaya yang tidak dibulatkan yang diperlukan adalah 100,30 yani 0,97, kira-kira Rp 1.034.021. Menambahkan 3% ke Rp 100 menghasilkan Rp 103, yang bersihnya hanya Rp 99,61. Perbedaan tersebut muncul karena pihak penyedia juga membebankan biaya atas kenaikan biaya tersebut."
            ],
            "table": {
              "headers": [
                "Mengisi daya",
                "Biaya hipotetis",
                "Bersih"
              ],
              "rows": [
                [
                  "Rp 100,00",
                  "Rp 3,30",
                  "Rp 96,70"
                ],
                [
                  "Rp 103,00",
                  "Rp 3,39",
                  "Rp 99,61"
                ],
                [
                  "Rp 103,40",
                  "Rp 3.402 sebelum pembulatan",
                  "Rp 99.998 sebelum pembulatan"
                ]
              ]
            }
          },
          {
            "heading": "Gunakan hasilnya sebagai pemeriksaan harga",
            "paragraphs": [
              "Masukkan jumlah yang dikumpulkan untuk perhitungan maju, atau pilih mode target-net untuk perhitungan terbalik. Jaga agar mata uang yang dipilih tetap konsisten dengan biaya tetap Anda. Pemilihan mata uang mengubah format; ia tidak melakukan konversi nilai tukar.",
              "Layar membulatkan hasilnya untuk ditampilkan. Jika pembayaran minimum harus dipenuhi dengan tepat, periksa kenaikan mata uang terkecil berikutnya dan aturan pembulatan penyedia Anda. Pengembalian dana, biaya minimum, pajak atas biaya, dan apakah biaya tambahan diperbolehkan memerlukan pemeriksaan terpisah."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Apakah biaya 0% selalu berarti saya menerima seluruh tagihan?",
            "answer": "Hanya jika biaya tetapnya juga nol dan tidak ada potongan lain yang berlaku. Biaya persentase 0% ditambah biaya tetap Rp 0,30 masih menyisakan Rp 99,70 dari biaya Rp 100."
          },
          {
            "question": "Bisakah saya membandingkan penyedia pembayaran yang berbeda?",
            "answer": "Ya, masukkan tarif yang dipublikasikan dan biaya tetap masing-masing penyedia menggunakan biaya yang sama. Bandingkan hasilnya dengan biaya tambahan dan ketentuan yang berlaku pada akun Anda."
          }
        ]
      },
      "discount": {
        "title": "Diskon bertingkat 20% dan 10%: mengapa totalnya bukan 30%?",
        "description": "Hitung diskon berturut-turut, bandingkan kombinasi kupon dan bedakan persentase harga akhir dari jumlah yang dihemat.",
        "answer": "Terapkan diskon kedua ke harga yang sudah dikurangi. Diskon 20% diikuti 10% menyisakan 80% × 90% = 72% dari harga asli, jadi total penghematannya adalah 28%.",
        "sections": [
          {
            "heading": "Lipat gandakan harga yang terus Anda bayar",
            "paragraphs": [
              "Untuk setiap persentase diskon, kurangi angka desimal dari satu. Kalikan harga awal dengan pecahan yang tersisa. Dengan dua diskon, harga akhir = asli × (1 − tarif pertama) × (1 − tarif kedua). Diskon efektif = 1 − harga akhir ± harga asli.",
              "Menambahkan tarif akan memperlakukan kedua diskon seolah-olah diterapkan pada harga asli. Itu adalah tawaran yang berbeda. Sebuah toko yang menjanjikan pengurangan tunggal sebesar 30% memberikan persentase pengurangan yang lebih besar daripada pengurangan berturut-turut sebesar 20% dan 10%, sebelum ketentuan lain dipertimbangkan."
            ]
          },
          {
            "heading": "Bandingkan dua penawaran untuk item seharga Rp 100",
            "paragraphs": [
              "Setelah pengurangan 20% pertama, barang tersebut berharga Rp 80. Pengurangan 10% kedua menghilangkan Rp 8, menyisakan Rp 72. Total penghematannya adalah Rp 28. Membalikkan urutan dua persentase diskon murni memberikan hasil matematis yang sama, karena faktor harga yang tersisa berlipat ganda.",
              "Aturan pemesanan tersebut tidak secara otomatis mencakup kupon bernilai tetap. Kupon Rp 10 setelah diskon 20% untuk item Rp 100 menghasilkan Rp 70. Mengambil diskon Rp 10 terlebih dahulu dan kemudian menerapkan 20% menghasilkan Rp 72. Pembelanjaan minimum, batas, dan produk yang dikecualikan dapat mengubah penawaran mana yang sebenarnya dapat digunakan."
            ],
            "table": {
              "headers": [
                "Penawaran",
                "Harga akhir",
                "Menyimpan"
              ],
              "rows": [
                [
                  "20%, lalu 10%",
                  "Rp 72",
                  "28%"
                ],
                [
                  "Satu diskon 30%.",
                  "Rp 70",
                  "30%"
                ],
                [
                  "20%, lalu kupon Rp 10",
                  "Rp 70",
                  "Rp 30"
                ]
              ]
            }
          },
          {
            "heading": "Masukkan pengurangan yang diiklankan, bukan harga tersisa",
            "paragraphs": [
              "Bidang kalkulator mengambil persentase diskon. Label yang bertuliskan bayar 80% dari harga asli berarti diskon 20%. Memasuki 80 justru akan menghitung pengurangan sebesar 80%.",
              "Alat ini memodelkan dua persentase pengurangan berturut-turut. Itu tidak menambahkan pajak penjualan, pengiriman, uang kembali atau kupon tetap. Bandingkan total pembayaran ketika item tersebut berbeda, dan hitung pembulatan aktual penjual di setiap langkah."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Apakah diskon 50% diikuti diskon 50% gratis?",
            "answer": "Tidak. Separuh dari harga asli tetap ada setelah pengurangan pertama, dan separuhnya tetap ada setelah pengurangan kedua. Anda membayar 25% dari harga asli, penghematan 75%."
          },
          {
            "question": "Mengapa penghematan pada struk saya sedikit berbeda?",
            "answer": "Pengecer dapat membulatkan setiap item atau setiap diskon secara terpisah, atau menerapkan diskon ke jumlah berbeda yang memenuhi syarat. Kalkulator ini menggunakan dua persentase yang disebutkan sebelum menampilkan hasil yang dibulatkan."
          }
        ]
      },
      "days": {
        "title": "Cara menghitung selisih hari: tanggal awal dan tahun kabisat",
        "description": "Pahami hari-hari yang telah berlalu versus jumlah tanggal inklusif, hari kabisat, akhir pekan, dan mengapa alat hari kalender berbeda dengan kalkulator tenggat waktu.",
        "answer": "Untuk hari kalender yang telah berlalu, kurangi tanggal mulai dari tanggal akhir. Jika hari awalnya adalah hari ke-1, tambahkan satu untuk rentang tanggal maju. 1 Januari hingga 11 Januari adalah 10 hari berlalu atau 11 hari inklusif.",
        "sections": [
          {
            "heading": "Pilih konvensi penghitungan terlebih dahulu",
            "paragraphs": [
              "Masa menginap dari Senin hingga Selasa mencakup satu malam tetapi menyentuh dua tanggal kalender. Kedua angka tersebut bisa saja benar karena menjawab pertanyaan yang berbeda. Putuskan apakah Anda ingin hari yang telah berlalu atau jumlah tanggal yang disertakan dalam suatu periode sebelum membandingkan hasilnya.",
              "Untuk rentang menaik, opsi sertakan mulai kalkulator menambahkan satu hari. Oleh karena itu, tanggal mulai dan akhir yang sama memberikan nol hari berlalu atau satu hari inklusif. Tanggal akhir sebelum tanggal mulai memberikan interval negatif; membalikkan tanggal ketika Anda menginginkan periode maju yang normal."
            ]
          },
          {
            "heading": "Kerjakan contoh tahun kabisat",
            "paragraphs": [
              "Pada tahun 2028, tanggal 28 Februari hingga 1 Maret mencakup dua hari yang telah berlalu karena tanggal 29 Februari jatuh di antara keduanya. Penghitungan inklusif memberikan tiga tanggal kalender: 28 Februari, 29 Februari, dan 1 Maret. Pada tahun 2027, 28 Februari hingga 1 Maret hanya mencakup satu hari yang telah berlalu.",
              "Alat ini menormalkan tanggal kalender yang dimasukkan ke UTC untuk pengurangan. Hal ini mencegah perubahan jam musim panas mengubah interval hari kalender biasa menjadi hari pecahan. Ini bukan kalkulator untuk durasi penerbangan atau jam pasti antara stempel waktu spesifik zona waktu."
            ],
            "table": {
              "headers": [
                "Tanggal",
                "Berlalu",
                "Termasuk memulai"
              ],
              "rows": [
                [
                  "1 Januari → 11 Januari",
                  "10 hari",
                  "11 hari"
                ],
                [
                  "Tanggal yang sama",
                  "0 hari",
                  "1 hari"
                ],
                [
                  "28 Februari → 1 Maret 2028",
                  "2 hari",
                  "3 hari"
                ]
              ]
            }
          },
          {
            "heading": "Hari kalender tidak berarti hari kerja",
            "paragraphs": [
              "Sabtu, Minggu dan hari libur nasional semuanya dihitung sebagai hari kalender. Untuk perencanaan cuti, gunakan kalkulator yang mengetahui hari libur negara terkait dan hari kerja pengganti. Perbedaan tanggal saja tidak dapat menentukan berapa hari cuti berbayar yang Anda perlukan.",
              "Kontrak dan tenggat waktu resmi dapat menentukan batas hari pertama, batas akhir hari, dan perpanjangan hari libur secara berbeda. Periksa aturan yang berlaku ketika tenggat waktu yang terlewat itu penting. Untuk penghitungan mundur dan hari jadi sehari-hari, sebutkan konvensi penghitungan Anda di samping hasilnya."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Haruskah saya memasukkan hari pertama?",
            "answer": "Sertakan ketika tanggal tersebut dihitung sebagai hari ke-1 periode tersebut. Biarkan saja dikecualikan saat mengukur jarak yang telah berlalu antar tanggal. Aturan dari kontrak atau otoritas lebih diprioritaskan daripada konvensi kalender umum."
          },
          {
            "question": "Apakah 30 hari selalu sama dengan satu bulan?",
            "answer": "Tidak. Kalender bulan mempunyai durasi yang berbeda-beda. Gunakan tanggal mulai dan akhir yang sebenarnya daripada mengonversi setiap bulan menjadi 30 hari."
          }
        ]
      },
      "stock-average": {
        "title": "Cara menghitung harga rata-rata saham setelah pembelian tambahan",
        "description": "Gunakan rata-rata tertimbang untuk menghitung harga pembelian rata-rata baru, total saham, dan jumlah investasi tanpa membingungkannya dengan pemilihan lot pajak.",
        "answer": "Tambahkan jumlah yang dibelanjakan untuk saham lama dan saham baru, lalu bagi dengan jumlah total saham. Rata-rata sederhana dari dua harga hanya berlaku jika jumlah bagiannya sama.",
        "sections": [
          {
            "heading": "Timbang setiap pembelian berdasarkan kuantitasnya",
            "paragraphs": [
              "Harga pembelian rata-rata baru = (jumlah yang ada × rata-rata yang ada + jumlah baru × harga baru) jumlah total. Harga dan kuantitas harus menggunakan satuan saham dan mata uang yang sama. Saham pecahan dapat digunakan jika mencerminkan kepemilikan Anda yang sebenarnya.",
              "Misalnya, 100 saham yang dibeli seharga Rp 50 dan 100 saham lainnya yang dibeli seharga Rp 40 berharga total Rp 9.000. Bagilah dengan 200 lembar saham dan dapatkan Rp 45. Jika pembelian kedua hanya 50 lembar saham seharga Rp 40, totalnya menjadi Rp 7.000 untuk 150 lembar saham, sehingga menghasilkan sekitar Rp 46,67, bukan Rp 45."
            ]
          },
          {
            "heading": "Rata-rata yang lebih rendah tidak menghilangkan kerugian",
            "paragraphs": [
              "Segera setelah membeli 100 saham tambahan seharga Rp 40, kepemilikan 200 saham senilai Rp 40 per saham memiliki nilai pasar Rp 8.000 dibandingkan Rp 9.000 yang dibelanjakan. Harga rata-rata telah turun, namun selisih Rp 1.000 yang belum direalisasi masih ada dan lebih banyak uang yang dimasukkan ke dalam investasi.",
              "Peralihan dari Rp 40 ke rata-rata Rp 45 akan berarti kenaikan harga sebesar 12,5% sebelum biaya. Itu adalah aritmatika, bukan perkiraan atau alasan untuk membeli. Meningkatkan posisi akan mengubah jumlah risiko serta harga rata-rata."
            ],
            "table": {
              "headers": [
                "Memegang",
                "Bagikan",
                "Jumlah yang dibelanjakan"
              ],
              "rows": [
                [
                  "Yang ada: Rp 50/saham",
                  "100",
                  "Rp 5.000"
                ],
                [
                  "Baru: Rp 40/saham",
                  "100",
                  "Rp 4.000"
                ],
                [
                  "Rata-rata gabungan: Rp 45",
                  "200",
                  "Rp 9.000"
                ]
              ]
            }
          },
          {
            "heading": "Pisahkan rata-rata pembelian dari catatan pajak",
            "paragraphs": [
              "Kalkulator ini memodelkan dua blok pembelian dan tidak termasuk biaya perantara, nilai tukar, dividen, penjualan, dan aksi korporasi. Konversikan catatan secara konsisten sebelum membandingkan pembelian yang dilakukan dalam mata uang berbeda.",
              "Rata-rata kepemilikan aritmatika bukanlah dasar penentuan biaya kena pajak. Aturan lot pajak dan metode yang diizinkan berbeda-beda menurut yurisdiksi dan aset. Simpan catatan transaksi asli broker daripada memperlakukan hasil ini sebagai instruksi pelaporan pajak."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Bisakah saya menggunakannya saat membeli dengan harga lebih tinggi?",
            "answer": "Ya. Rumus rata-rata tertimbang yang sama juga berlaku. Membeli di atas rata-rata yang ada akan meningkatkannya; Besar kecilnya perubahan tergantung pada besaran baru."
          },
          {
            "question": "Mengapa rata-rata broker saya berbeda?",
            "answer": "Biaya, konversi mata uang, pembulatan, aksi korporasi, atau metode akuntansi broker dapat dimasukkan dalam angkanya. Alat ini hanya menggunakan input harga dan kuantitas yang ditampilkan."
          }
        ]
      },
      "compound": {
        "title": "Bunga majemuk dengan setoran bulanan: rumus dan contoh perhitungan",
        "description": "Pahami pengembalian tahunan yang efektif, kontribusi akhir bulan, dan perbedaan antara uang kontribusi dan pertumbuhan investasi hipotetis.",
        "answer": "Ubah laba tahunan efektif menjadi tarif bulanan, tingkatkan saldo yang ada, lalu tambahkan kontribusi bulan tersebut. Pisahkan uang yang disumbangkan dari pertumbuhan sehingga simpanan yang lebih besar tidak disalahartikan sebagai keuntungan yang lebih baik.",
        "sections": [
          {
            "heading": "Konversikan asumsi tahunan secara konsisten",
            "paragraphs": [
              "Myeotiji memperlakukan pengembalian tahunan sebagai tingkat tahunan yang efektif. Tarif bulanannya adalah (1 + tarif tahunan)^(1/12) − 1. Pada 5% per tahun, tarif bulanan tersebut adalah sekitar 0,4074%, bukan persis 5% 12. Menggunakan tarif nominal yang dikutip dibagi 12 akan menjelaskan konvensi penggabungan yang berbeda.",
              "Untuk setiap bulan, saldo baru = saldo sebelumnya × (1 + tarif bulanan) + kontribusi. Kontribusi ditambahkan pada akhir bulan, sehingga setoran pertama memperoleh pengembalian pada bulan-bulan berikutnya, bukan sebelum dibayarkan."
            ]
          },
          {
            "heading": "Periksa contoh satu tahun dengan memisahkan simpanan",
            "paragraphs": [
              "Mulailah dengan Rp 1.000, kontribusikan Rp 100 pada akhir setiap bulan dan asumsikan keuntungan tahunan efektif konstan sebesar 5% selama satu tahun. Rp 1.000 awal tumbuh menjadi Rp 1.050; deposito dua belas bulanan tumbuh menjadi sekitar Rp 1.227,26. Totalnya sekitar Rp 2.277,26.",
              "Anda memberikan Rp 2.200: Rp 1.000 pada awalnya ditambah dua belas Rp 100 deposit. Sisanya sekitar Rp 77,26 adalah model pertumbuhan. Dengan pengembalian 0%, saldonya tepat Rp 2.200. Perbandingan tanpa pengembalian ini berguna ketika memeriksa apakah masukannya masuk akal."
            ],
            "table": {
              "headers": [
                "Skenario satu tahun",
                "Uang disediakan",
                "Perkiraan saldo"
              ],
              "rows": [
                [
                  "pengembalian tahunan 0%.",
                  "Rp 2.200",
                  "Rp 2.200,00"
                ],
                [
                  "Pengembalian tahunan efektif 5%.",
                  "Rp 2.200",
                  "Rp 2.277,26"
                ]
              ]
            }
          },
          {
            "heading": "Gunakan skenario, bukan hanya satu hasil yang dijanjikan",
            "paragraphs": [
              "Bandingkan asumsi yang lebih rendah, menengah, dan tinggi dengan tetap menjaga simpanan tetap konstan. Investasi riil tidak memberikan pengembalian bulanan yang mulus, dan urutan keuntungan dan kerugian penting ketika uang ditambahkan atau ditarik.",
              "Hasilnya tidak mengurangi pajak, biaya investasi atau inflasi. Ini bukan kutipan deposito atau perkiraan investasi tertentu. Jika bank atau penyedia jasa menyatakan tingkat bunga nominal, waktu iuran yang berbeda, atau jadwal penggabungan yang berbeda, selaraskan ketentuan tersebut sebelum membandingkan ilustrasinya dengan alat ini."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Apakah iuran bulanan diberikan pada awal atau akhir bulan?",
            "answer": "Pada akhir setiap bulan model. Jadwal awal bulan memberikan setiap kontribusi satu bulan pertumbuhan ekstra dan dapat menghasilkan keseimbangan yang berbeda."
          },
          {
            "question": "Apakah hasilnya termasuk pajak atau inflasi?",
            "answer": "Tidak. Outputnya adalah keseimbangan hipotetis sebelum efek tersebut. Saldo nominal dan daya belinya di masa depan adalah besaran yang berbeda."
          }
        ]
      },
      "unit-converter": {
        "title": "Cara mengonversi satuan panjang, suhu dan penyimpanan data",
        "description": "Konversi pengukuran umum sambil memeriksa volume AS versus imperial, offset suhu, dan unit penyimpanan desimal versus biner.",
        "answer": "Konversikan melalui satuan dasar yang sama dan periksa definisi satuannya terlebih dahulu. Satu galon AS berbeda dengan satu galon imperial, dan satu gigabyte desimal berbeda dengan satu gibibyte. Temperatur juga perlu diimbangi, bukan sekedar pengali.",
        "sections": [
          {
            "heading": "Panjang, massa, luas dan volume menggunakan faktor konversi",
            "paragraphs": [
              "Untuk satuan berdimensi sama, ubah besaran sumber menjadi satuan dasar dan bagi dengan faktor satuan tujuan. Satu mil sama dengan 1,609344 kilometer, jadi 5 mil sama dengan 8,04672 kilometer. Jangan bingung membedakan faktor panjang dengan faktor luas: satuan persegi memerlukan konversi kuadrat.",
              "Menu volume secara eksplisit menggunakan galon cair AS dan gelas AS. Satu galon cair AS adalah 3.785411784 liter; ini bukan galon kekaisaran yang lebih besar. Gelas suatu resep mungkin menggunakan ketentuan lain, jadi periksalah resep atau wadah pengukur sebelum memberikan nomor."
            ]
          },
          {
            "heading": "Suhu dan penyimpanan adalah jebakan umum",
            "paragraphs": [
              "Untuk Celcius hingga Fahrenheit gunakan °F = °C × 9/5 + 32. Untuk sebaliknya gunakan °C = (°F − 32) × 5/9. Itulah sebabnya 100°F sama dengan 37,78°C, bukan hasil yang diperoleh dengan mengalikan 100 dengan 5/9 saja.",
              "Unit penyimpanan desimal menggunakan pangkat 1.000; unit biner menggunakan pangkat 1.024. Di sini 1 GB adalah 1.000.000.000 byte, sedangkan 1 GiB adalah 1.073.741.824 byte. Ini adalah jumlah data, bukan kecepatan koneksi internet atau waktu transfer file."
            ],
            "table": {
              "headers": [
                "Masukan",
                "Nilai yang dikonversi"
              ],
              "rows": [
                [
                  "1 mil",
                  "1,609344 km"
                ],
                [
                  "1 galon cair AS",
                  "3.785411784 L"
                ],
                [
                  "100°F",
                  "37.777…°C"
                ],
                [
                  "1 GiB",
                  "1.073.741.824B"
                ]
              ]
            }
          },
          {
            "heading": "Pertahankan presisi penuh hingga langkah terakhir",
            "paragraphs": [
              "Pilih kategori, masukkan nilai dan pilih unit sumber dan tujuan. Kalkulator menampilkan hingga delapan tempat desimal, sehingga jumlah yang sangat kecil mungkin memerlukan satuan tujuan yang lebih kecil agar tetap dapat dibaca.",
              "Membulatkan faktor konversi sebelum mengalikan dapat memperbesar kesalahan. Untuk pekerjaan manufaktur yang ditoleransi, pelaporan ilmiah, atau standar industri yang ditentukan, verifikasi ketelitian yang diperlukan dan definisi tepat yang digunakan dalam konteks tersebut."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Bisakah saya mengubah gram langsung ke mililiter?",
            "answer": "Bukan tanpa kepadatan materialnya. Gram mengukur massa dan mililiter mengukur volume; konversi di antara keduanya bukanlah faktor satuan universal."
          },
          {
            "question": "Apakah galon menu berarti satu galon kekaisaran Inggris?",
            "answer": "Tidak. Menunya diberi label US gal dan menggunakan galon cair AS. Gunakan definisi yang dibutuhkan oleh materi sumber Anda."
          }
        ]
      },
      "age": {
        "title": "Cara menghitung umur: ulang tahun, tahun penuh dan jumlah hari",
        "description": "Hitung usia tahun selesai, bedakan usia dari perbedaan tahun kalender, dan pahami konvensi tanggal setempat dan hari ulang tahun kabisat.",
        "answer": "Kurangi tahun lahir dengan tahun referensi, lalu kurangi satu jika ulang tahun belum terjadi pada tahun tersebut. Myeotiji menggunakan tanggal kalender hari ini di browser Anda sebagai tanggal referensi.",
        "sections": [
          {
            "heading": "Perbedaan satu tahun tidak selalu merupakan usia yang lengkap",
            "paragraphs": [
              "Seseorang yang lahir pada tanggal 31 Desember 2000 akan berusia 25 tahun pada tanggal 30 Desember 2026 dan berusia 26 tahun pada tanggal 31 Desember. Cukup mengurangkan 2000 dari 2026 sehari sebelumnya akan melebih-lebihkan usia selesai sebanyak satu.",
              "Bandingkan bulannya terlebih dahulu, lalu harinya. Jika bulan rujukan lebih awal dari bulan lahir, kurangi satu tahun. Jika bulannya cocok tetapi hari referensinya lebih awal, kurangi juga satu. Jika tidak, pertahankan perbedaan tahunnya."
            ]
          },
          {
            "heading": "Pahami tanggal yang digunakan kalkulator",
            "paragraphs": [
              "Masukkan tanggal lahir di kalkulator usia. Ini menggunakan tanggal kalender lokal saat ini dari browser Anda dan juga melaporkan hari kalender yang telah berlalu sejak lahir. Tanggal referensi dalam tabel panduan ini adalah ilustrasi tetap; alat langsung tidak menyediakan bidang tanggal referensi sejarah yang terpisah.",
              "Pengguna di zona waktu berbeda dapat melihat usia berbeda sekitar tengah malam pada hari ulang tahun. Penghitungan hari hanya menggunakan aritmatika berdasarkan tanggal, bukan waktu lahir yang tepat. Tanggal lahir di masa depan bukan merupakan input usia lengkap yang valid."
            ],
            "table": {
              "headers": [
                "Tanggal lahir",
                "Tanggal referensi dalam contoh",
                "Usia yang telah selesai"
              ],
              "rows": [
                [
                  "31-12-2000",
                  "30-12-2026",
                  "25"
                ],
                [
                  "31-12-2000",
                  "31-12-2026",
                  "26"
                ],
                [
                  "31-12-2000",
                  "01-01-2027",
                  "26"
                ]
              ]
            }
          },
          {
            "heading": "Aturan hari kabisat dan kelayakan resmi perlu diperhatikan",
            "paragraphs": [
              "Untuk ulang tahun 29 Februari, alat ini membandingkan bulan dan hari secara langsung. Pada tahun non-kabisat, jumlah tahun selesainya bertambah pada tanggal 1 Maret. Itu adalah konvensi kalkulator yang ditetapkan, bukan peraturan tentang usia legal di setiap yurisdiksi.",
              "Penerimaan, tunjangan, kontrak asuransi atau proses resmi lainnya mungkin menggunakan usia pada tanggal tertentu atau aturan ulang tahun khusus. Periksa definisi proses itu. Hasil sehari-hari pada zaman sekarang tidak dapat menggantikan penilaian kelayakannya."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Mengapa hasilnya bisa berbeda dengan tahun yang tertera di kalender?",
            "answer": "Pengurangan tahun kalender mengabaikan apakah hari ulang tahun telah terjadi. Jumlah usia yang diselesaikan, ulang tahun yang sebenarnya dicapai berdasarkan konvensi tanggal yang disebutkan."
          },
          {
            "question": "Bisakah saya menggunakan hari yang telah berlalu dibagi 365?",
            "answer": "Bukan untuk usia satu tahun yang pasti. Tahun kabisat dan posisi hari lahir membuat jalan pintas tersebut tidak dapat diandalkan dalam batasan usia."
          }
        ]
      }
    },
    "legalLabels": {
      "privacy": "Privasi & cookie",
      "terms": "Penggunaan & batasan",
      "contact": "Kontak & koreksi",
      "notice": "Perkiraan untuk informasi umum. Layanan ini tidak memberikan nasihat perpajakan, hukum, penggajian atau investasi individu, menyiapkan pengembalian, atau mewakili Anda. Periksa tahun yang disebutkan, lokasi dan pengecualian sebelum mengandalkan hasil.",
      "tracking": "Google Analytics aktif secara default dan dapat dimatikan di bagian bawah halaman. Input kalkulator tidak dikirim. AdSense terhubung untuk meminta iklan nonpersonalisasi. Google dan mitranya dapat memakai cookie, web beacon, alamat IP dan pengenal untuk menayangkan serta mengukur iklan. Penayangan bergantung pada persetujuan dan pengaturan akun. Iklan nonpersonalisasi juga dapat memakai cookie. Halaman bahasa Mandarin tetap tanpa analisis dan iklan."
    },
    "legal": {
      "privacy": [
        [
          "Ruang lingkup dan operator",
          "Myeotiji dioperasikan dari Korea Selatan. Pemberitahuan ini berlaku untuk halaman berbahasa Indonesia. Kontak: contact@myeotiji.kr. Bagian bahasa lain dapat memakai pengaturan analisis berbeda."
        ],
        [
          "Masukan kalkulator",
          "Perhitungan dijalankan di browser Anda. Versi ini tidak mengirimkan jumlah kalkulator, gaji, tanggal atau hasil ke database operator atau layanan analitik. Jangan menempatkan data pribadi di URL atau mengirimkan dokumen identitas, detail akun, atau catatan penggajian kepada kami."
        ],
        [
          "Analisis, iklan, dan cookie",
          "Google Analytics aktif secara default dan dapat dimatikan di bagian bawah halaman. Input kalkulator tidak dikirim. AdSense terhubung untuk meminta iklan nonpersonalisasi. Google dan mitranya dapat memakai cookie, web beacon, alamat IP dan pengenal untuk menayangkan serta mengukur iklan. Penayangan bergantung pada persetujuan dan pengaturan akun. Iklan nonpersonalisasi juga dapat memakai cookie. Halaman bahasa Mandarin tetap tanpa analisis dan iklan."
        ],
        [
          "Diperlukan hosting dan pemrosesan di luar negeri",
          "Vercel mengirimkan dan melindungi situs web ini. Permintaan harus memaparkan informasi koneksi seperti alamat IP, URL yang diminta, waktu, header perangkat/browser, dan sinyal keamanan ke infrastruktur hosting. Informasi tersebut dapat diproses di luar negara Anda, termasuk di Amerika Serikat atau lokasi infrastruktur lainnya. Menonaktifkan analitik tidak menghapus pemrosesan ini. Kami menggunakannya untuk pengiriman, keamanan dan penyelidikan kesalahan, bukan profil periklanan."
        ],
        [
          "Retensi dan pilihan Anda",
          "Input kalkulator tidak kami simpan sebagai catatan server. Log hosting mengikuti retensi penyedia dan pengaturan proyek yang berlaku; kami belum memverifikasi satu periode penyimpanan tetap untuk semua log infrastruktur. Hubungi kami untuk rincian yang berlaku atau untuk meminta akses, koreksi, penghapusan atau pembatasan jika tersedia berdasarkan hukum Anda. Kami menilai permintaan dan pengecualian hukum, dan tidak menjanjikan bahwa semua log penyedia dapat segera dihapus. Menutup halaman akan menghapus status penghitungan dalam memori; browser Anda mungkin menyimpan riwayat atau memulihkan tab."
        ],
        [
          "Email dan tautan eksternal",
          "Jika Anda memilih untuk mengirim email kepada kami, kami akan menerima alamat dan pesan Anda untuk menangani permintaan tersebut dan hanya menyimpan apa yang diperlukan untuk tujuan tersebut atau kewajiban hukum. Gunakan contoh fiktif, bukan catatan keuangan pribadi yang sebenarnya. Email tidak diperlukan untuk menghitung. Referensi resmi membuka situs web pihak ketiga dengan kebijakannya sendiri. Perubahan pada pelacakan atau penggunaan data memerlukan pembaruan pemberitahuan ini dan penerapan pilihan apa pun yang diwajibkan secara hukum sebelum aktivasi."
        ]
      ],
      "terms": [
        [
          "Tujuan",
          "Penjelasan umum dan aritmatika swalayan gratis. Kami tidak menganggap diri kami sebagai pengacara, akuntan, ahli pajak, penyedia penggajian, penasihat investasi, atau lembaga pemerintah. Tidak ada hubungan profesional-klien yang tercipta hanya dengan menggunakan kalkulator."
        ],
        [
          "Periksa asumsinya",
          "Hasil adalah perkiraan untuk tahun, yurisdiksi, dan model yang disebutkan. Status pajak, pengecualian, dokumen rencana, peraturan setempat, pembulatan dan perubahan undang-undang dapat mengubah hasil sebenarnya. Sebuah contoh bukanlah suatu jaminan. Verifikasi dengan layanan resmi terkait atau profesional berkualifikasi sebelum mengajukan, membayar gaji, berinvestasi, menyumbang, atau memesan perjalanan."
        ],
        [
          "Batasan tertentu",
          "Lembur AS menggunakan garis dasar federal yang tidak dikecualikan, tidak semua peraturan negara bagian. Pembayaran yang dibawa pulang adalah ilustrasi tahunan yang disederhanakan, bukan perhitungan W-4 atau pengarsipan. Pertandingan 401(k) bukanlah saldo pribadi atau rekomendasi kontribusi. Alat rata-rata dan gabungan saham tidak merekomendasikan sekuritas atau jaminan pengembalian. Alat tanggal dan usia tidak menentukan kelayakan hukum atau tenggat waktu."
        ],
        [
          "Kesalahan dan tanggung jawab",
          "Laporkan dugaan kesalahan menggunakan masukan fiktif dan URL yang terpengaruh. Kami mungkin mengoreksi, memperingatkan, atau membatasi sementara alat yang terpengaruh jika asumsinya tidak dapat diverifikasi. Pemberitahuan ini menjelaskan ruang lingkup; hal ini tidak mengecualikan tanggung jawab yang tidak dapat dikecualikan secara hukum, termasuk tanggung jawab yang berlaku atas kesalahan yang disengaja atau kelalaian besar, atau menghilangkan hak wajib konsumen."
        ],
        [
          "Dukungan dan perubahan",
          "Dukungan menangani kesalahan teknis dan koreksi sumber umum. Jangan meminta posisi pajak individu, keputusan hukum, persiapan pengajuan atau representasi. Kami akan mengarahkan permintaan tersebut ke otoritas terkait atau profesional yang berkualifikasi. Perubahan material tercermin pada tanggal halaman; periksa kembali asumsi setiap saat."
        ]
      ],
      "contact": [
        [
          "Masalah teknis, koreksi dan permintaan privasi",
          "Kirim email ke contact@myeotiji.kr dengan URL halaman, tahun/wilayah yang berlaku, dan contoh fiktif yang menunjukkan hasil yang diharapkan dan ditampilkan. Anda juga dapat meminta informasi tentang pemrosesan data atau menggunakan hak privasi yang berlaku di sini. Kami tidak memerlukan akun atau formulir."
        ],
        [
          "Jaga keamanan informasi Anda",
          "Jangan mengirimkan email berisi tanda pengenal pemerintah, rekening bank, kata sandi, slip gaji lengkap, atau dokumen pajak sebenarnya. Kami tidak menawarkan konsultasi pajak pribadi, hukum atau investasi atau bertindak atas nama Anda. Untuk tenggat waktu pengajuan, pembayaran, atau pekerjaan, hubungi langsung otoritas terkait atau profesional yang berkualifikasi."
        ]
      ]
    },
    "policy": [
      {
        "heading": "Tujuan dan kepengarangan",
        "text": "Myeotiji menerbitkan penjelasan tentang kalkulator yang tersedia di situs ini. Panduan ini disiapkan dengan bantuan AI dan diperiksa berdasarkan metode penghitungan yang disebutkan, contoh kerja, dan referensi yang dikutip. Nama penulis mengidentifikasi Myeotiji sebagai layanan penerbitan; ia tidak meminta peninjauan oleh akuntan, pengacara, atau penasihat yang ditunjuk."
      },
      {
        "heading": "Sumber, tanggal dan aturan yang berlaku",
        "text": "Untuk topik hukum, pajak, penggajian, dan asuransi sosial, kami lebih memilih publikasi dari otoritas publik yang bertanggung jawab dan tautan ke dokumen terkait. Persyaratan penyedia dan standar teknis diidentifikasi seperti itu. Contoh matematika yang ditulis oleh Myeotiji adalah ilustrasi, bukan kutipan dari suatu otoritas. Tanggal pembaruan yang terlihat mencatat tinjauan konten material, bukan penyegaran harian otomatis. Negara, tahun dan pengecualian yang tercantum dalam setiap panduan penting."
      },
      {
        "heading": "Perhitungan apa yang bisa dan tidak bisa dilakukan",
        "text": "Kami memeriksa contoh numerik yang representatif dan kondisi batas. Model sederhana masih mengabaikan fakta yang dapat mengubah pembayaran atau hak sebenarnya. Pertumbuhan investasi hipotetis bukanlah hasil yang dijanjikan, dan perkiraan gaji bukanlah penilaian pajak final. Contohnya menggunakan asumsi yang ditunjukkan; pembaca harus memverifikasi catatan aktual penyedia, pemberi kerja, atau otoritas sebelum mengandalkan angka untuk mengambil keputusan penting."
      },
      {
        "heading": "Koreksi dan umpan balik",
        "text": "Jika Anda menemukan rumus, sumber, terjemahan atau contoh yang salah, silakan kirimkan alamat halaman, masukan yang relevan dan hasil yang Anda harapkan ke alamat kontak kami. Jangan mengirimkan dokumen identitas, laporan pembayaran penuh, nomor rekening, atau informasi pribadi lain yang tidak diperlukan. Kita dapat menggunakan contoh yang dapat direproduksi untuk menyelidiki dan memperbarui penjelasannya."
      }
    ]
  },
  "hi": {
    "labels": {
      "home": "कैलकुलेटर",
      "guides": "गणना मार्गदर्शिकाएँ",
      "policy": "हम ये गाइड कैसे तैयार करते हैं",
      "title": "गणना मार्गदर्शिकाएँ: सूत्र और कार्यान्वित उदाहरण",
      "description": "तिथियों, धन और रोजमर्रा के निर्णयों के लिए व्यावहारिक गणना। एक कैलकुलेटर चुनें और उत्तर के पीछे का सूत्र देखें।",
      "intro": "उस प्रश्न से प्रारंभ करें जिसका आप उत्तर देना चाहते हैं. प्रत्येक मार्गदर्शिका विधि बताती है, संख्याओं के माध्यम से काम करती है और एक कैलकुलेटर के लिंक का उपयोग करती है जिसका उपयोग आप अपने इनपुट के साथ कर सकते हैं।",
      "global": "पैसा, तारीखें और रोजमर्रा का हिसाब",
      "country": "संयुक्त राज्य अमेरिका: वेतन, कर और सेवानिवृत्ति",
      "quick": "त्वरित उत्तर",
      "contents": "इस पेज पर",
      "try": "कैलकुलेटर आज़माएं",
      "related": "संबंधित मार्गदर्शिकाएँ",
      "questions": "सामान्य प्रश्न",
      "references": "स्रोत और आगे पढ़ना",
      "updated": "अद्यतन किया गया",
      "author": "मायोतिजी द्वारा तैयार किया गया",
      "exampleNote": "उदाहरण बताई गई धारणाओं को स्पष्ट करते हैं। वास्तविक शुल्क, रिटर्न और पेरोल राशि भिन्न हो सकती है।",
      "policyTitle": "मायोतिजी गणना मार्गदर्शिकाएँ: स्रोत और संपादकीय विधि",
      "policyDescription": "म्योतिजी कैसे गणना समझाते हैं, उदाहरणों की जांच करते हैं, स्रोतों का हवाला देते हैं और सुधार और अनुमान कैसे संभालते हैं।",
      "calculatorLink": "सूत्र, एक कार्यान्वित उदाहरण और सामान्य गलतियाँ देखें →",
      "homeTitle": "निःशुल्क वित्तीय एवं रोजमर्रा के कैलकुलेटर | मायोतिजी",
      "homeHeading": "पैसे, काम और रोजमर्रा की जिंदगी के लिए मुफ्त कैलकुलेटर",
      "homeDescription": "तिथियों, धन और रोजमर्रा के निर्णयों के लिए व्यावहारिक गणना। एक कैलकुलेटर चुनें और उत्तर के पीछे का सूत्र देखें।"
    },
    "guides": {
      "fee": {
        "title": "लेनदेन शुल्क कैसे निकालें और तय शुद्ध राशि पाने के लिए कितना लें",
        "description": "प्रतिशत और निश्चित शुल्क के बाद शुद्ध आय की गणना करें, फिर लक्ष्य भुगतान के लिए आवश्यक शुल्क का पता लगाने के लिए सूत्र को उल्टा करें।",
        "answer": "शुल्क से प्रतिशत शुल्क और निर्धारित शुल्क दोनों घटाएँ। फीस के बाद एक विशेष राशि प्राप्त करने के लिए, लक्ष्य और निर्धारित शुल्क को प्रतिशत दर से एक घटा कर विभाजित करें।",
        "sections": [
          {
            "heading": "शुल्क के दोनों भागों को अलग करें",
            "paragraphs": [
              "एकत्रित राशि के साथ प्रतिशत शुल्क बढ़ता है; एक निश्चित लेनदेन शुल्क नहीं है. गुणा करने से पहले प्रतिशत को दशमलव के रूप में लिखें। काल्पनिक 3% शुल्क के लिए, 0.03 का उपयोग करें। 0.30 निश्चित शुल्क का मतलब आपके द्वारा चुनी गई मुद्रा में मुद्रा की एक इकाई का 0.30 भाग है, अन्य प्रतिशत नहीं।",
              "शुद्ध आय = वसूली राशि × (1 - दर) - निश्चित शुल्क। जांचें कि प्रदाता किस राशि पर अपनी दर लागू करता है: शिपिंग, कर, मुद्रा रूपांतरण और सीमा पार शुल्क का अलग-अलग उपचार हो सकता है। यह मार्गदर्शिका अंकगणित का वर्णन करती है, किसी प्रदाता के वर्तमान टैरिफ का नहीं।"
            ]
          },
          {
            "heading": "एक व्यावहारिक उदाहरण: 3% जोड़ना पर्याप्त क्यों नहीं है",
            "paragraphs": [
              "मान लीजिए कि आप ₹ 100 जमा करते हैं और काल्पनिक शुल्क 3% प्लस ₹ 0.30 है। प्रतिशत भाग ₹ 3 है; निश्चित भाग जोड़ने पर ₹ 3.30 शुल्क और ₹ 96.70 शुद्ध आय मिलती है।",
              "₹ 100 नेट प्राप्त करने के लिए, चार्ज × 0.97 − 0.30 = 100 को हल करें। आवश्यक अनराउंड चार्ज 100.30 ÷ 0.97, लगभग ₹ 1,034,021 है। ₹ 100 में 3% जोड़ने पर ₹ 103 मिलते हैं, जिसका शुद्ध मूल्य केवल ₹ 99.61 है। अंतर इसलिए उत्पन्न होता है क्योंकि प्रदाता बढ़े हुए शुल्क पर भी शुल्क लेता है।"
            ],
            "table": {
              "headers": [
                "आरोप",
                "काल्पनिक शुल्क",
                "नेट"
              ],
              "rows": [
                [
                  "₹ 100.00",
                  "₹ 3.30",
                  "₹ 96.70"
                ],
                [
                  "₹ 103.00",
                  "₹ 3.39",
                  "₹ 99.61"
                ],
                [
                  "₹ 103.40",
                  "राउंडिंग से पहले ₹ 3,402",
                  "राउंडिंग से पहले ₹ 99,998"
                ]
              ]
            }
          },
          {
            "heading": "मूल्य निर्धारण जांच के रूप में परिणाम का उपयोग करें",
            "paragraphs": [
              "आगे की गणना के लिए एकत्रित राशि दर्ज करें, या रिवर्स गणना के लिए लक्ष्य-नेट मोड का चयन करें। चयनित मुद्रा को अपने निर्धारित शुल्क के अनुरूप रखें। मुद्रा चयन स्वरूपण बदलता है; यह विनिमय-दर रूपांतरण नहीं करता है।",
              "प्रदर्शन के लिए स्क्रीन परिणाम को गोल कर देती है। यदि न्यूनतम भुगतान बिल्कुल पूरा किया जाना चाहिए, तो अगली सबसे छोटी मुद्रा वृद्धि और अपने प्रदाता के राउंडिंग नियमों की जांच करें। रिफंड, न्यूनतम शुल्क, शुल्क पर कर और क्या अधिभार की अनुमति है, इसके लिए अलग से जांच की आवश्यकता होती है।"
            ]
          }
        ],
        "faqs": [
          {
            "question": "क्या 0% शुल्क का हमेशा यह मतलब होता है कि मुझे पूरा शुल्क प्राप्त होगा?",
            "answer": "केवल तभी जब निर्धारित शुल्क भी शून्य हो और कोई अन्य कटौती लागू न हो। 0% प्रतिशत शुल्क और ₹ 0.30 का निश्चित शुल्क अभी भी ₹ 100 के शुल्क से ₹ 99.70 बचता है।"
          },
          {
            "question": "क्या मैं विभिन्न भुगतान प्रदाताओं की तुलना कर सकता हूँ?",
            "answer": "हां, समान शुल्क का उपयोग करके प्रत्येक प्रदाता की प्रकाशित दर और निर्धारित शुल्क दर्ज करें। किसी भी अतिरिक्त शुल्क और आपके खाते पर लागू होने वाली शर्तों के साथ परिणाम की तुलना करें।"
          }
        ]
      },
      "discount": {
        "title": "20% के बाद 10% छूट: कुल छूट 30% क्यों नहीं होती?",
        "description": "क्रमिक छूट की गणना करें, कूपन संयोजनों की तुलना करें और बचाई गई राशि से अंतिम-मूल्य प्रतिशत को अलग करें।",
        "answer": "पहले से कम कीमत पर दूसरी छूट लागू करें। 20% की छूट और उसके बाद 10% की छूट मूल कीमत का 80% × 90% = 72% है, इसलिए कुल बचत 28% है।",
        "sections": [
          {
            "heading": "जो कीमत आप चुकाते हैं उसे गुणा करें",
            "paragraphs": [
              "प्रत्येक प्रतिशत छूट के लिए, दशमलव दर को एक से घटाएँ। मूल कीमत को शेष अंशों से गुणा करें। दो छूटों के साथ, अंतिम कीमत = मूल × (1 - पहली दर) × (1 - दूसरी दर)। प्रभावी छूट = 1 - अंतिम कीमत ÷ मूल कीमत।",
              "दरें जोड़ने पर दोनों छूटों को ऐसे माना जाएगा मानो वे मूल कीमत पर लागू हों। वह एक अलग ऑफर है. एकल 30% कटौती का वादा करने वाला एक स्टोर अन्य शर्तों पर विचार करने से पहले, क्रमिक 20% और 10% कटौती की तुलना में एक बड़ा प्रतिशत कटौती दे रहा है।"
            ]
          },
          {
            "heading": "₹ 100 आइटम पर दो ऑफ़र की तुलना करें",
            "paragraphs": [
              "पहली 20% कटौती के बाद वस्तु की कीमत ₹ 80 है। दूसरी 10% कटौती से ₹ 8 हट जाता है और ₹ 72 रह जाता है। कुल बचत ₹ 28 है. दो शुद्ध प्रतिशत छूटों के क्रम को उलटने से वही गणितीय परिणाम मिलता है, क्योंकि शेष-मूल्य कारक कई गुना बढ़ जाते हैं।",
              "वह ऑर्डर नियम स्वचालित रूप से एक निश्चित-मूल्य कूपन तक विस्तारित नहीं होता है। ₹ 100 के आइटम पर 20% की छूट के बाद ₹ 10 का कूपन ₹ 70 देता है। पहले ₹ 10 की छूट लेने और फिर 20% लगाने पर ₹ 72 मिलते हैं। न्यूनतम खर्च, सीमा और बहिष्कृत उत्पाद बदल सकते हैं कि किस ऑफ़र का वास्तव में उपयोग किया जा सकता है।"
            ],
            "table": {
              "headers": [
                "प्रस्ताव",
                "अंतिम कीमत",
                "सहेजा जा रहा है"
              ],
              "rows": [
                [
                  "20%, फिर 10%",
                  "₹ 72",
                  "28%"
                ],
                [
                  "एक 30% छूट",
                  "₹ 70",
                  "30%"
                ],
                [
                  "20%, फिर ₹ 10 का कूपन",
                  "₹ 70",
                  "₹ 30"
                ]
              ]
            }
          },
          {
            "heading": "विज्ञापित कटौती दर्ज करें, शेष कीमत नहीं",
            "paragraphs": [
              "कैलकुलेटर के फ़ील्ड छूट प्रतिशत लेते हैं। एक लेबल कहता है कि मूल कीमत का 80% भुगतान करें का मतलब 20% छूट है। 80 दर्ज करने के बजाय 80% कमी की गणना की जाएगी।",
              "टूल लगातार दो प्रतिशत कटौती का मॉडल प्रस्तुत करता है। इसमें बिक्री कर, डिलीवरी, कैश-बैक या निश्चित कूपन नहीं जोड़े जाते हैं। उन वस्तुओं में अंतर होने पर चेकआउट के कुल योग की तुलना करें और प्रत्येक चरण पर विक्रेता की वास्तविक पूर्णांकन की अनुमति दें।"
            ]
          }
        ],
        "faqs": [
          {
            "question": "क्या 50% छूट के बाद 50% छूट मुफ़्त है?",
            "answer": "नहीं, मूल कीमत का आधा हिस्सा पहली कटौती के बाद रहता है, और उसका आधा दूसरी कटौती के बाद भी रहता है। आप मूल कीमत का 25% भुगतान करते हैं, 75% की बचत।"
          },
          {
            "question": "मेरी रसीद पर बचत थोड़ी भिन्न क्यों है?",
            "answer": "एक खुदरा विक्रेता प्रत्येक वस्तु या प्रत्येक छूट को अलग-अलग पूर्णांकित कर सकता है, या अलग-अलग योग्य राशियों पर छूट लागू कर सकता है। यह कैलकुलेटर पूर्ण परिणाम प्रदर्शित करने से पहले दो बताए गए प्रतिशत का उपयोग करता है।"
          }
        ]
      },
      "days": {
        "title": "दो तारीखों के बीच दिन कैसे गिनें: पहला दिन और लीप वर्ष",
        "description": "बीते हुए दिनों बनाम सम्मिलित तिथि गणना, लीप दिन, सप्ताहांत को समझें और एक कैलेंडर-दिन उपकरण समय सीमा कैलकुलेटर से अलग क्यों है।",
        "answer": "बीते हुए कैलेंडर दिनों के लिए, प्रारंभिक तिथि को अंतिम तिथि से घटाएं। यदि आरंभिक दिन 1 दिन है, तो आगे की तिथि सीमा के लिए एक जोड़ें। 1 जनवरी से 11 जनवरी तक 10 बीते हुए दिन या 11 दिन सम्मिलित हैं।",
        "sections": [
          {
            "heading": "सबसे पहले गिनती का तरीका चुनें",
            "paragraphs": [
              "सोमवार से मंगलवार तक का प्रवास एक रात तक चलता है लेकिन दो कैलेंडर तिथियों को छूता है। दोनों संख्याएँ सही हो सकती हैं क्योंकि वे अलग-अलग प्रश्नों का उत्तर देती हैं। परिणामों की तुलना करने से पहले तय करें कि आप बीते हुए दिन चाहते हैं या किसी अवधि में शामिल तिथियों की संख्या।",
              "आरोही सीमा के लिए कैलकुलेटर का शामिल-प्रारंभ विकल्प एक दिन जोड़ता है। इसलिए एक ही आरंभ और समाप्ति तिथि शून्य बीता हुआ दिन या एक समावेशी दिन देती है। प्रारंभ तिथि से पहले की समाप्ति तिथि एक नकारात्मक अंतराल देती है; जब आप सामान्य आगे की अवधि चाहते हैं तो तारीखों को उलट दें।"
            ]
          },
          {
            "heading": "एक लीप-वर्ष उदाहरण के माध्यम से कार्य करें",
            "paragraphs": [
              "2028 में, 28 फरवरी से 1 मार्च तक दो बीते हुए दिन होते हैं क्योंकि 29 फरवरी उनके बीच पड़ता है। समावेशी गणना से तीन कैलेंडर तारीखें मिलती हैं: 28 फरवरी, 29 फरवरी और 1 मार्च। 2027 में, 28 फरवरी से 1 मार्च तक केवल एक बीता हुआ दिन होता है।",
              "उपकरण घटाव के लिए यूटीसी में दर्ज कैलेंडर तिथियों को सामान्य करता है। यह दिन के उजाले को बचाने वाली घड़ी को सामान्य कैलेंडर-दिन के अंतराल को आंशिक दिन में बदलने से रोकता है। यह समय-क्षेत्र-विशिष्ट टाइमस्टैम्प के बीच उड़ान अवधि या सटीक घंटों के लिए कैलकुलेटर नहीं है।"
            ],
            "table": {
              "headers": [
                "खजूर",
                "बीत गया",
                "प्रारंभ सहित"
              ],
              "rows": [
                [
                  "1 जनवरी → 11 जनवरी",
                  "10 दिन",
                  "11 दिन"
                ],
                [
                  "वही तारीख",
                  "0 दिन",
                  "1 दिन"
                ],
                [
                  "28 फरवरी → 1 मार्च 2028",
                  "2 दिन",
                  "3 दिन"
                ]
              ]
            }
          },
          {
            "heading": "कैलेंडर दिनों का मतलब व्यावसायिक दिन नहीं है",
            "paragraphs": [
              "शनिवार, रविवार और सार्वजनिक अवकाश सभी कैलेंडर दिनों के रूप में गिने जाते हैं। छुट्टी की योजना बनाने के लिए, ऐसे कैलकुलेटर का उपयोग करें जो संबंधित देश की छुट्टियों और स्थानापन्न कार्यदिवसों को जानता हो। केवल तारीख का अंतर यह स्थापित नहीं कर सकता कि आपको कितने सवैतनिक अवकाश दिनों की आवश्यकता है।",
              "अनुबंध और आधिकारिक समय-सीमाएं पहले दिन, दिन के अंत की कटऑफ और छुट्टियों के विस्तार को अलग-अलग तरीके से परिभाषित कर सकती हैं। जब समय-सीमा चूकना मायने रखता है तो शासकीय नियम की जाँच करें। रोजमर्रा की उलटी गिनती और वर्षगाँठों के लिए, परिणाम के साथ-साथ अपनी गिनती प्रक्रिया भी बताएं।"
            ]
          }
        ],
        "faqs": [
          {
            "question": "क्या मुझे पहला दिन शामिल करना चाहिए?",
            "answer": "इसे तब शामिल करें जब वह तारीख अवधि के पहले दिन के रूप में गिनी जाए। तिथियों के बीच बीते हुए अंतराल को मापते समय इसे बाहर रखें। किसी अनुबंध या प्राधिकरण के नियम को सामान्य कैलेंडर सम्मेलन पर प्राथमिकता दी जाती है।"
          },
          {
            "question": "क्या 30 दिन हमेशा एक महीने के बराबर होते हैं?",
            "answer": "नहीं, कैलेंडर महीनों की लंबाई अलग-अलग होती है। हर महीने को 30 दिनों में बदलने के बजाय वास्तविक आरंभ और समाप्ति तिथियों का उपयोग करें।"
          }
        ]
      },
      "stock-average": {
        "title": "नई खरीद के बाद शेयर की भारित औसत कीमत कैसे निकालें",
        "description": "कर-लॉट चुनाव के साथ भ्रमित किए बिना नए औसत खरीद मूल्य, कुल शेयरों और निवेशित राशि की गणना करने के लिए भारित औसत का उपयोग करें।",
        "answer": "मौजूदा और नए शेयरों पर खर्च की गई राशि को जोड़ें, फिर शेयरों की कुल संख्या से विभाजित करें। दो कीमतों का साधारण औसत तभी काम करता है जब शेयर की मात्रा बराबर हो।",
        "sections": [
          {
            "heading": "प्रत्येक खरीद को उसकी मात्रा के आधार पर तौलें",
            "paragraphs": [
              "नया औसत खरीद मूल्य = (मौजूदा मात्रा × मौजूदा औसत + नई मात्रा × नई कीमत) ÷ कुल मात्रा। कीमतों और मात्राओं में समान शेयर इकाई और मुद्रा का उपयोग होना चाहिए। आंशिक शेयरों का उपयोग तब किया जा सकता है जब वे आपकी वास्तविक होल्डिंग्स को दर्शाते हैं।",
              "उदाहरण के लिए, ₹ 50 पर खरीदे गए 100 शेयर और ₹ 40 पर खरीदे गए अन्य 100 शेयरों की कुल लागत ₹ 9,000 है। ₹ 45 पाने के लिए 200 शेयरों से विभाजित करें। यदि दूसरी खरीद ₹ 40 पर केवल 50 शेयरों की है, तो 150 शेयरों में कुल ₹ 7,000 हो जाता है, जो लगभग ₹ 46.67 देता है, ₹ 45 नहीं।"
            ]
          },
          {
            "heading": "कम औसत नुकसान को दूर नहीं करता है",
            "paragraphs": [
              "₹ 40 पर अतिरिक्त 100 शेयर खरीदने के तुरंत बाद, ₹ 40 प्रति शेयर मूल्य की 200-शेयर होल्डिंग का बाजार मूल्य खर्च किए गए ₹ 9,000 के मुकाबले ₹ 8,000 है। औसत कीमत गिर गई है, लेकिन 1,000 डॉलर का अवास्तविक अंतर बना हुआ है और निवेश के लिए अधिक पैसा उजागर हुआ है।",
              "₹ 40 से ₹ 45 के औसत की ओर बढ़ने पर फीस से पहले 12.5% ​​मूल्य वृद्धि होगी। यह अंकगणित है, कोई पूर्वानुमान या खरीदने का कारण नहीं। पोजीशन बढ़ाने से जोखिम की राशि के साथ-साथ औसत कीमत भी बदल जाती है।"
            ],
            "table": {
              "headers": [
                "धारण करना",
                "शेयर",
                "राशि खर्च की गई"
              ],
              "rows": [
                [
                  "मौजूदा: ₹ 50/शेयर",
                  "100",
                  "₹ 5,000"
                ],
                [
                  "नया: ₹ 40/शेयर",
                  "100",
                  "₹ 4,000"
                ],
                [
                  "संयुक्त औसत: ₹ 45",
                  "200",
                  "₹ 9,000"
                ]
              ]
            }
          },
          {
            "heading": "खरीद औसत को कर रिकॉर्ड से अलग रखें",
            "paragraphs": [
              "कैलकुलेटर खरीद के दो ब्लॉकों को मॉडल करता है और ब्रोकरेज शुल्क, विनिमय दर, लाभांश, बिक्री और कॉर्पोरेट कार्यों को शामिल नहीं करता है। विभिन्न मुद्राओं में की गई खरीदारी की तुलना करने से पहले रिकॉर्ड को लगातार रूपांतरित करें।",
              "अंकगणितीय होल्डिंग औसत कर योग्य लागत के आधार का निर्धारण नहीं है। टैक्स-लॉट नियम और अनुमत तरीके क्षेत्राधिकार और संपत्ति के अनुसार अलग-अलग होते हैं। इस परिणाम को कर-रिपोर्टिंग निर्देश के रूप में मानने के बजाय ब्रोकर के मूल लेनदेन रिकॉर्ड रखें।"
            ]
          }
        ],
        "faqs": [
          {
            "question": "क्या मैं अधिक कीमत पर खरीदारी करते समय इसका उपयोग कर सकता हूँ?",
            "answer": "हाँ। वही भारित-औसत फॉर्मूला लागू होता है। आपके मौजूदा औसत से ऊपर खरीदारी करने से यह बढ़ जाता है; परिवर्तन का आकार नई मात्रा पर निर्भर करता है।"
          },
          {
            "question": "मेरे ब्रोकर का औसत भिन्न क्यों है?",
            "answer": "इसके आंकड़े में शुल्क, मुद्रा रूपांतरण, राउंडिंग, कॉर्पोरेट क्रियाएं या ब्रोकर की लेखांकन पद्धति शामिल हो सकती है। यह टूल केवल दिखाए गए मूल्य और मात्रा इनपुट का उपयोग करता है।"
          }
        ]
      },
      "compound": {
        "title": "मासिक निवेश के साथ चक्रवृद्धि ब्याज: सूत्र और उदाहरण",
        "description": "प्रभावी वार्षिक रिटर्न, महीने के अंत में योगदान और योगदान किए गए धन और काल्पनिक निवेश वृद्धि के बीच अंतर को समझें।",
        "answer": "प्रभावी वार्षिक रिटर्न को मासिक दर में बदलें, मौजूदा शेष राशि बढ़ाएं, फिर महीने का योगदान जोड़ें। योगदान किए गए धन को विकास से अलग रखें ताकि बेहतर रिटर्न के लिए बड़ी जमा राशि को गलत न समझा जाए।",
        "sections": [
          {
            "heading": "वार्षिक धारणा को लगातार रूपांतरित करें",
            "paragraphs": [
              "मायोतिजी वार्षिक रिटर्न को प्रभावी वार्षिक दर मानते हैं। मासिक दर है (1 + वार्षिक दर)^(1/12) − 1. सालाना 5% पर, वह मासिक दर लगभग 0.4074% है, न कि बिल्कुल 5% ÷ 12। 12 से विभाजित नाममात्र उद्धृत दर का उपयोग करना एक अलग कंपाउंडिंग सम्मेलन का वर्णन करेगा।",
              "प्रत्येक माह के लिए, नया शेष = पिछला शेष × (1 + मासिक दर) + योगदान। योगदान महीने के अंत में जोड़ा जाता है, इसलिए पहली जमा राशि भुगतान से पहले के बजाय बाद के महीनों में रिटर्न अर्जित करती है।"
            ]
          },
          {
            "heading": "जमा राशि को अलग करके एक साल का उदाहरण जांचें",
            "paragraphs": [
              "₹ 1,000 से शुरू करें, प्रत्येक माह के अंत में ₹ 100 का योगदान करें और एक वर्ष के लिए लगातार 5% प्रभावी वार्षिक रिटर्न मानें। शुरुआती ₹ 1,000 बढ़कर ₹ 1,050 हो जाता है; बारह मासिक जमा राशियाँ लगभग ₹ 1,227.26 तक बढ़ जाती हैं। कुल लगभग ₹ 2,277.26 है।",
              "आपने प्रारंभ में ₹ 2,200: ₹ 1,000 और साथ ही बारह ₹ 100 जमाएँ प्रदान कीं। शेष लगभग ₹ 77.26 प्रतिरूपित वृद्धि है। 0% रिटर्न के साथ शेष राशि बिल्कुल ₹ 2,200 है। यह शून्य-रिटर्न तुलना यह जाँचते समय उपयोगी होती है कि इनपुट समझ में आता है या नहीं।"
            ],
            "table": {
              "headers": [
                "एक साल का परिदृश्य",
                "पैसे की आपूर्ति की गई",
                "अनुमानित शेष"
              ],
              "rows": [
                [
                  "0% वार्षिक रिटर्न",
                  "₹ 2,200",
                  "₹ 2,200.00"
                ],
                [
                  "5% प्रभावी वार्षिक रिटर्न",
                  "₹ 2,200",
                  "₹ 2,277.26"
                ]
              ]
            }
          },
          {
            "heading": "एक वादा किए गए परिणाम के बजाय परिदृश्यों का उपयोग करें",
            "paragraphs": [
              "जमाराशियों को स्थिर रखते हुए निम्न, मध्य और उच्च मान्यताओं की तुलना करें। वास्तविक निवेश सुचारू मासिक रिटर्न नहीं देते हैं, और जब पैसा जोड़ा या निकाला जाता है तो लाभ और हानि का क्रम मायने रखता है।",
              "परिणाम में कर, निवेश शुल्क या मुद्रास्फीति में कटौती नहीं होती है। यह न तो जमा उद्धरण है और न ही किसी विशिष्ट निवेश का पूर्वानुमान है। यदि कोई बैंक या प्रदाता एक नाममात्र दर, एक अलग योगदान समय या एक अलग चक्रवृद्धि अनुसूची बताता है, तो इस उपकरण के साथ इसके चित्रण की तुलना करने से पहले उन सम्मेलनों को संरेखित करें।"
            ]
          }
        ],
        "faqs": [
          {
            "question": "क्या मासिक योगदान महीने की शुरुआत या अंत में किया जाता है?",
            "answer": "प्रत्येक मॉडल माह के अंत में. महीने की शुरुआत का शेड्यूल प्रत्येक योगदान को वृद्धि का एक अतिरिक्त महीना देता है और एक अलग संतुलन उत्पन्न कर सकता है।"
          },
          {
            "question": "क्या परिणाम में कर या मुद्रास्फीति शामिल है?",
            "answer": "नहीं, आउटपुट उन प्रभावों से पहले एक काल्पनिक संतुलन है। एक नाममात्र शेष और उसकी भविष्य की क्रय शक्ति अलग-अलग मात्राएँ हैं।"
          }
        ]
      },
      "unit-converter": {
        "title": "लंबाई, तापमान और डेटा की इकाइयाँ कैसे बदलें",
        "description": "यूएस बनाम इंपीरियल वॉल्यूम, तापमान ऑफसेट और दशमलव बनाम बाइनरी स्टोरेज इकाइयों की जांच करते समय सामान्य माप परिवर्तित करें।",
        "answer": "एक सामान्य आधार इकाई के माध्यम से कनवर्ट करें और पहले इकाई परिभाषा की जाँच करें। एक अमेरिकी गैलन एक शाही गैलन से भिन्न होता है, और एक दशमलव गीगाबाइट एक गीबिबाइट से भिन्न होता है। तापमान को केवल गुणक ही नहीं, बल्कि ऑफसेट की भी आवश्यकता होती है।",
        "sections": [
          {
            "heading": "लंबाई, द्रव्यमान, क्षेत्रफल और आयतन रूपांतरण कारकों का उपयोग करते हैं",
            "paragraphs": [
              "समान आयाम की इकाइयों के लिए, स्रोत मात्रा को आधार इकाई में बदलें और गंतव्य इकाई के कारक से विभाजित करें। एक मील 1.609344 किलोमीटर है, इसलिए 5 मील 8.04672 किलोमीटर है। लंबाई कारक को क्षेत्रफल कारक के साथ भ्रमित न करें: वर्ग इकाइयों को वर्ग रूपांतरण की आवश्यकता होती है।",
              "वॉल्यूम मेनू स्पष्ट रूप से यूएस तरल गैलन और यूएस कप का उपयोग करता है। एक अमेरिकी तरल गैलन 3.785411784 लीटर है; यह बड़ा शाही गैलन नहीं है. एक रेसिपी का कप किसी अन्य परंपरा का उपयोग कर सकता है, इसलिए नंबर लगाने से पहले रेसिपी या मापने वाले बर्तन की जांच करें।"
            ]
          },
          {
            "heading": "तापमान और भंडारण आम जाल हैं",
            "paragraphs": [
              "सेल्सियस से फ़ारेनहाइट के लिए °F = °C × 9/5 + 32 का उपयोग करें। इसके विपरीत, °C = (°F - 32) × 5/9 का उपयोग करें। यही कारण है कि 100 को केवल 5/9 से गुणा करने पर प्राप्त परिणाम के बजाय 100°F लगभग 37.78°C होता है।",
              "दशमलव भंडारण इकाइयाँ 1,000 की शक्तियों का उपयोग करती हैं; बाइनरी इकाइयाँ 1,024 की शक्तियों का उपयोग करती हैं। यहां 1 जीबी 1,000,000,000 बाइट्स है, जबकि 1 जीबी 1,073,741,824 बाइट्स है। ये डेटा मात्राएं हैं, इंटरनेट कनेक्शन की गति या फ़ाइल-स्थानांतरण समय नहीं।"
            ],
            "table": {
              "headers": [
                "इनपुट",
                "परिवर्तित मूल्य"
              ],
              "rows": [
                [
                  "1 मील",
                  "1.609344 कि.मी"
                ],
                [
                  "1 यूएस तरल गैलन",
                  "3.785411784 एल"
                ],
                [
                  "100°F",
                  "37.777…डिग्री सेल्सियस"
                ],
                [
                  "1 जीबी",
                  "1,073,741,824 बी"
                ]
              ]
            }
          },
          {
            "heading": "अंतिम चरण तक पूरी सटीकता रखें",
            "paragraphs": [
              "एक श्रेणी चुनें, एक मान दर्ज करें और स्रोत और गंतव्य इकाइयों का चयन करें। कैलकुलेटर आठ दशमलव स्थानों तक प्रदर्शित करता है, इसलिए बहुत छोटी मात्रा को पढ़ने योग्य बने रहने के लिए एक छोटी गंतव्य इकाई की आवश्यकता हो सकती है।",
              "गुणा करने से पहले रूपांतरण कारक को पूर्णांकित करने से त्रुटि बढ़ सकती है। सहनशील विनिर्माण कार्य, वैज्ञानिक रिपोर्टिंग या एक निर्धारित उद्योग मानक के लिए, आवश्यक परिशुद्धता और उस संदर्भ में उपयोग की गई सटीक परिभाषा को सत्यापित करें।"
            ]
          }
        ],
        "faqs": [
          {
            "question": "क्या मैं ग्राम को सीधे मिलीलीटर में बदल सकता हूँ?",
            "answer": "सामग्री के घनत्व के बिना नहीं। ग्राम द्रव्यमान मापते हैं और मिलीलीटर आयतन मापते हैं; उनके बीच रूपांतरण एक सार्वभौमिक इकाई कारक नहीं है।"
          },
          {
            "question": "क्या मेनू के गैलन का मतलब यूके इंपीरियल गैलन है?",
            "answer": "नहीं, मेनू पर यूएस गैलन का लेबल है और इसमें यूएस तरल गैलन का उपयोग किया गया है। अपनी स्रोत सामग्री के लिए आवश्यक परिभाषा का उपयोग करें।"
          }
        ]
      },
      "age": {
        "title": "आयु कैसे निकालें: जन्मदिन, पूरे वर्ष और जन्म से बीते दिन",
        "description": "आयु के पूर्ण वर्षों की गणना करें, आयु को कैलेंडर-वर्ष के अंतर से अलग करें और स्थानीय-तिथि और लीप-जन्मदिन की परंपराओं को समझें।",
        "answer": "संदर्भ वर्ष से जन्म वर्ष घटाएं, फिर यदि उस वर्ष अभी तक जन्मदिन नहीं हुआ है तो एक घटाएं। Myeotiji संदर्भ तिथि के लिए आपके ब्राउज़र में आज की कैलेंडर तिथि का उपयोग करता है।",
        "sections": [
          {
            "heading": "एक वर्ष का अंतर हमेशा पूर्ण आयु नहीं होता",
            "paragraphs": [
              "31 दिसंबर 2000 को जन्मा कोई व्यक्ति 30 दिसंबर 2026 को 25 वर्ष का हो जाता है और 31 दिसंबर को 26 वर्ष का हो जाता है। एक दिन पहले 2026 में से 2000 घटाने पर पूर्ण आयु एक से अधिक हो जाएगी।",
              "पहले महीने की तुलना करें और फिर दिन की। यदि संदर्भ माह जन्म माह से पहले का है तो एक वर्ष घटा दें। यदि महीने मेल खाते हैं लेकिन संदर्भ दिन पहले है, तो एक भी घटा दें। अन्यथा वर्ष का अंतर रखें।"
            ]
          },
          {
            "heading": "कैलकुलेटर द्वारा उपयोग की गई तारीख को समझें",
            "paragraphs": [
              "आयु कैलकुलेटर में जन्म तिथि दर्ज करें। यह आपके ब्राउज़र से वर्तमान स्थानीय कैलेंडर तिथि का उपयोग करता है और जन्म के बाद से बीते कैलेंडर दिनों की भी रिपोर्ट करता है। इस गाइड की तालिका में संदर्भ तिथियाँ निश्चित चित्र हैं; लाइव टूल एक अलग ऐतिहासिक-संदर्भ-दिनांक फ़ील्ड प्रदान नहीं करता है।",
              "अलग-अलग समय क्षेत्रों के उपयोगकर्ता जन्मदिन की आधी रात के आसपास अलग-अलग उम्र देख सकते हैं। दिन की गणना सटीक जन्म समय के बजाय केवल दिनांक अंकगणित का उपयोग करती है। भविष्य की जन्मतिथि मान्य पूर्ण-आयु इनपुट नहीं है।"
            ],
            "table": {
              "headers": [
                "जन्मतिथि",
                "उदाहरण में संदर्भ दिनांक",
                "पूर्ण आयु"
              ],
              "rows": [
                [
                  "2000-12-31",
                  "2026-12-30",
                  "25"
                ],
                [
                  "2000-12-31",
                  "2026-12-31",
                  "26"
                ],
                [
                  "2000-12-31",
                  "2027-01-01",
                  "26"
                ]
              ]
            }
          },
          {
            "heading": "लीप-डे और आधिकारिक पात्रता नियमों में सावधानी बरतने की ज़रूरत है",
            "paragraphs": [
              "29 फरवरी के जन्मदिन के लिए, यह टूल सीधे महीने और दिन की तुलना करता है। गैर-लीप वर्ष में इसके पूर्ण-वर्ष की संख्या 1 मार्च को बढ़ जाती है। यह एक घोषित कैलकुलेटर परंपरा है, प्रत्येक क्षेत्राधिकार में कानूनी उम्र के बारे में कोई निर्णय नहीं।",
              "प्रवेश, लाभ, बीमा अनुबंध या अन्य आधिकारिक प्रक्रिया में एक निर्दिष्ट तिथि पर उम्र या एक विशेष जन्मदिन नियम का उपयोग किया जा सकता है। उस प्रक्रिया की परिभाषा की जाँच करें. रोज़मर्रा का वर्तमान-आयु परिणाम इसकी पात्रता मूल्यांकन को प्रतिस्थापित नहीं कर सकता है।"
            ]
          }
        ],
        "faqs": [
          {
            "question": "परिणाम कैलेंडर में दिखाए गए वर्ष से भिन्न क्यों हो सकते हैं?",
            "answer": "कैलेंडर-वर्ष घटाव इस पर ध्यान नहीं देता कि जन्मदिन हुआ है या नहीं। पूर्ण आयु वास्तव में बताई गई तिथि परिपाटी के अंतर्गत पहुँचे हुए जन्मदिनों को गिना जाता है।"
          },
          {
            "question": "क्या मैं इसके स्थान पर बीते हुए दिनों को 365 से विभाजित करके उपयोग कर सकता हूँ?",
            "answer": "सटीक पूर्ण-वर्ष की आयु के लिए नहीं। लीप वर्ष और जन्मदिन की स्थिति आयु सीमाओं के आसपास उस शॉर्टकट को अविश्वसनीय बनाती है।"
          }
        ]
      }
    },
    "legalLabels": {
      "privacy": "गोपनीयता और कुकीज़",
      "terms": "उपयोग एवं सीमाएँ",
      "contact": "संपर्क एवं सुधार",
      "notice": "सामान्य जानकारी के लिए अनुमान. यह सेवा व्यक्तिगत कर, कानूनी, पेरोल या निवेश सलाह प्रदान नहीं करती है, रिटर्न तैयार नहीं करती है, या आपका प्रतिनिधित्व नहीं करती है। किसी परिणाम पर भरोसा करने से पहले बताए गए वर्ष, स्थान और बहिष्करण की जांच करें।",
      "tracking": "Google Analytics सामान्य रूप से चालू है और पृष्ठ के नीचे बंद किया जा सकता है। कैलकुलेटर के इनपुट नहीं भेजे जाते। गैर-वैयक्तिकृत विज्ञापन माँगने के लिए AdSense जुड़ा है। Google और साझेदार विज्ञापन दिखाने तथा मापने के लिए कुकी, वेब बीकन, IP पते और पहचानकर्ता इस्तेमाल कर सकते हैं। विज्ञापन दिखना खाते की स्वीकृति और सेटिंग पर निर्भर है। गैर-वैयक्तिकृत विज्ञापन भी कुकी इस्तेमाल कर सकते हैं। चीनी पृष्ठों पर विश्लेषण और विज्ञापन बंद हैं।"
    },
    "legal": {
      "privacy": [
        [
          "दायरा और ऑपरेटर",
          "Myeotiji का संचालन दक्षिण कोरिया से होता है। यह सूचना हिन्दी पृष्ठों पर लागू है। संपर्क: contact@myeotiji.kr। अन्य भाषाओं के पृष्ठों की विश्लेषण सेटिंग अलग हो सकती है।"
        ],
        [
          "कैलकुलेटर इनपुट",
          "गणनाएँ आपके ब्राउज़र में चलती हैं. यह संस्करण किसी ऑपरेटर डेटाबेस या एनालिटिक्स सेवा को कैलकुलेटर राशि, वेतन, तिथियां या परिणाम नहीं भेजता है। व्यक्तिगत डेटा को यूआरएल में न रखें या हमें पहचान दस्तावेज़, खाता विवरण या पेरोल रिकॉर्ड न भेजें।"
        ],
        [
          "विश्लेषिकी, विज्ञापन और कुकीज़",
          "Google Analytics सामान्य रूप से चालू है और पृष्ठ के नीचे बंद किया जा सकता है। कैलकुलेटर के इनपुट नहीं भेजे जाते। गैर-वैयक्तिकृत विज्ञापन माँगने के लिए AdSense जुड़ा है। Google और साझेदार विज्ञापन दिखाने तथा मापने के लिए कुकी, वेब बीकन, IP पते और पहचानकर्ता इस्तेमाल कर सकते हैं। विज्ञापन दिखना खाते की स्वीकृति और सेटिंग पर निर्भर है। गैर-वैयक्तिकृत विज्ञापन भी कुकी इस्तेमाल कर सकते हैं। चीनी पृष्ठों पर विश्लेषण और विज्ञापन बंद हैं।"
        ],
        [
          "आवश्यक होस्टिंग और विदेशी प्रसंस्करण",
          "वर्सेल इस वेबसाइट की डिलीवरी और सुरक्षा करता है। अनुरोध आवश्यक रूप से होस्टिंग बुनियादी ढांचे के लिए आईपी पता, अनुरोधित यूआरएल, समय, डिवाइस/ब्राउज़र हेडर और सुरक्षा सिग्नल जैसी कनेक्शन जानकारी को उजागर करते हैं। ऐसी जानकारी संयुक्त राज्य अमेरिका या अन्य बुनियादी ढांचे वाले स्थानों सहित आपके देश के बाहर संसाधित की जा सकती है। एनालिटिक्स को अक्षम करने से यह प्रोसेसिंग नहीं हटती। हम इसका उपयोग डिलीवरी, सुरक्षा और दोष जांच के लिए करते हैं, विज्ञापन प्रोफ़ाइल के लिए नहीं।"
        ],
        [
          "प्रतिधारण और आपकी पसंद",
          "कैलकुलेटर इनपुट हमारे द्वारा सर्वर रिकॉर्ड के रूप में नहीं रखे जाते हैं। होस्टिंग लॉग प्रदाता प्रतिधारण और लागू प्रोजेक्ट सेटिंग्स का पालन करते हैं; हमने सभी बुनियादी ढांचे लॉग के लिए एक भी निश्चित अवधारण अवधि सत्यापित नहीं की है। लागू विवरण के लिए या आपके कानून के तहत जहां उपलब्ध हो, पहुंच, सुधार, विलोपन या प्रतिबंध का अनुरोध करने के लिए हमसे संपर्क करें। हम अनुरोधों और कानूनी अपवादों का आकलन करते हैं, और यह वादा नहीं करते हैं कि सभी प्रदाता लॉग तुरंत हटा दिए जा सकते हैं। पृष्ठ को बंद करने से इसकी इन-मेमोरी गणना स्थिति साफ़ हो जाती है; आपका ब्राउज़र इतिहास को संरक्षित कर सकता है या किसी टैब को पुनर्स्थापित कर सकता है।"
        ],
        [
          "ईमेल और बाहरी लिंक",
          "यदि आप हमें ईमेल करना चुनते हैं, तो हम अनुरोध को संभालने के लिए आपका पता और संदेश प्राप्त करते हैं और केवल वही रखते हैं जो उस उद्देश्य या कानूनी दायित्वों के लिए आवश्यक है। काल्पनिक उदाहरणों का उपयोग करें, वास्तविक व्यक्तिगत वित्तीय रिकॉर्ड का नहीं। गणना के लिए ईमेल की आवश्यकता नहीं है. आधिकारिक संदर्भ अपनी नीतियों के साथ तृतीय-पक्ष वेबसाइटें खोलते हैं। ट्रैकिंग या डेटा उपयोग में परिवर्तन के लिए इस नोटिस को अपडेट करने और सक्रियण से पहले कानूनी रूप से आवश्यक विकल्पों को लागू करने की आवश्यकता होती है।"
        ]
      ],
      "terms": [
        [
          "प्रयोजन",
          "मुफ़्त, स्व-सेवा अंकगणित और सामान्य स्पष्टीकरण। हम स्वयं को आपके वकील, लेखाकार, कर तैयारकर्ता, पेरोल प्रदाता, निवेश सलाहकार या सरकारी एजेंसी के रूप में नहीं रखते हैं। कोई भी पेशेवर-ग्राहक संबंध केवल कैलकुलेटर का उपयोग करने से नहीं बनता है।"
        ],
        [
          "धारणाओं की जाँच करें",
          "परिणाम बताए गए वर्ष, अधिकार क्षेत्र और मॉडल के लिए अनुमान हैं। कर की स्थिति, छूट, योजना दस्तावेज़, स्थानीय नियम, पूर्णीकरण और कानून बदलने से वास्तविक परिणाम बदल सकते हैं। उदाहरण कोई गारंटी नहीं है. आवेदन करने, वेतन भुगतान करने, निवेश करने, दान देने या यात्रा बुक करने से पहले संबंधित आधिकारिक सेवा या योग्य पेशेवर से सत्यापित करें।"
        ],
        [
          "विशिष्ट सीमाएँ",
          "यूएस ओवरटाइम संघीय कवर-नॉन-एक्सेम्प्ट बेसलाइन का उपयोग करता है, सभी राज्य नियमों का नहीं। टेक-होम वेतन एक सरलीकृत वार्षिक चित्रण है, न कि W-4 या फाइलिंग गणना। 401(k) मैच एक निहित शेष या योगदान अनुशंसा नहीं है। स्टॉक औसत और कंपाउंड टूल प्रतिभूतियों या गारंटी रिटर्न की अनुशंसा नहीं करते हैं। दिनांक और आयु उपकरण कानूनी पात्रता या समय सीमा तय नहीं करते हैं।"
        ],
        [
          "त्रुटियाँ और जिम्मेदारी",
          "काल्पनिक इनपुट और प्रभावित यूआरएल का उपयोग करके एक संदिग्ध त्रुटि की रिपोर्ट करें। जब किसी प्रभावित टूल की धारणाओं को सत्यापित नहीं किया जा सकता है तो हम उसे सही कर सकते हैं, उसके बारे में चेतावनी दे सकते हैं या अस्थायी रूप से प्रतिबंधित कर सकते हैं। यह नोटिस दायरे का वर्णन करता है; यह उस दायित्व को बाहर नहीं करता है जिसे कानूनी तौर पर बाहर नहीं किया जा सकता है, जिसमें जानबूझकर कदाचार या घोर लापरवाही के लिए लागू दायित्व या अनिवार्य उपभोक्ता अधिकारों को हटाना शामिल है।"
        ],
        [
          "समर्थन और परिवर्तन",
          "समर्थन तकनीकी दोषों और सामान्य स्रोत सुधारों को संभालता है। व्यक्तिगत कर स्थिति, कानूनी निर्णय, फाइलिंग तैयारी या प्रतिनिधित्व का अनुरोध न करें। हम ऐसे अनुरोधों को संबंधित प्राधिकारी या योग्य पेशेवर को निर्देशित करेंगे। सामग्री परिवर्तन पृष्ठ दिनांक में परिलक्षित होते हैं; हर बार धारणाओं की दोबारा जाँच करें।"
        ]
      ],
      "contact": [
        [
          "तकनीकी मुद्दे, सुधार और गोपनीयता अनुरोध",
          "पेज यूआरएल, लागू वर्ष/क्षेत्र और अपेक्षित और प्रदर्शित परिणाम दिखाने वाला एक काल्पनिक उदाहरण के साथ contact@myeotiji.kr पर ईमेल करें। आप यहां डेटा प्रोसेसिंग के बारे में जानकारी का अनुरोध कर सकते हैं या लागू गोपनीयता अधिकारों का प्रयोग कर सकते हैं। हमें किसी खाते या फॉर्म की आवश्यकता नहीं है."
        ],
        [
          "अपनी जानकारी सुरक्षित रखें",
          "सरकारी पहचानकर्ताओं, बैंक खातों, पासवर्ड, पूर्ण भुगतान पर्ची या वास्तविक कर दस्तावेजों को ईमेल न करें। हम व्यक्तिगत कर, कानूनी या निवेश परामर्श प्रदान नहीं करते हैं या आपकी ओर से कार्य नहीं करते हैं। फाइलिंग, भुगतान या रोजगार की समय सीमा के लिए, संबंधित प्राधिकारी या योग्य पेशेवर से सीधे संपर्क करें।"
        ]
      ]
    },
    "policy": [
      {
        "heading": "उद्देश्य और लेखकत्व",
        "text": "मायोतिजी इस साइट पर उपलब्ध कैलकुलेटरों के स्पष्टीकरण प्रकाशित करते हैं। ये गाइड एआई की सहायता से तैयार किए गए थे और बताई गई गणना पद्धति, काम किए गए उदाहरणों और उद्धृत संदर्भों के अनुसार जांचे गए थे। लेखक का नाम मायोतिजी को प्रकाशन सेवा के रूप में पहचानता है; यह किसी नामित अकाउंटेंट, वकील या विनियमित सलाहकार द्वारा समीक्षा का दावा नहीं करता है।"
      },
      {
        "heading": "स्रोत, तिथियां और लागू नियम",
        "text": "कानून, कर, पेरोल और सामाजिक-बीमा विषयों के लिए, हम जिम्मेदार सार्वजनिक प्राधिकरण के प्रकाशनों और संबंधित दस्तावेजों के लिंक को प्राथमिकता देते हैं। प्रदाता की शर्तों और तकनीकी मानकों की पहचान इस प्रकार की जाती है। मायोतिजी द्वारा लिखा गया गणितीय उदाहरण एक उदाहरण है, किसी प्राधिकारी का उद्धरण नहीं। दृश्यमान अद्यतन तिथि एक भौतिक सामग्री समीक्षा को रिकॉर्ड करती है, स्वचालित दैनिक ताज़ा नहीं। प्रत्येक गाइड मामले में बताए गए देश, वर्ष और बहिष्करण।"
      },
      {
        "heading": "एक गणना क्या स्थापित कर सकती है और क्या स्थापित नहीं कर सकती",
        "text": "हम प्रतिनिधि संख्यात्मक उदाहरणों और सीमा स्थितियों की जाँच करते हैं। सरल मॉडल अभी भी उन तथ्यों को छोड़ देते हैं जो वास्तविक भुगतान या पात्रता को बदल सकते हैं। काल्पनिक निवेश वृद्धि वादा किया गया रिटर्न नहीं है, और पेरोल अनुमान अंतिम कर मूल्यांकन नहीं है। उदाहरण दिखाए गए मान्यताओं का उपयोग करते हैं; परिणामी निर्णय के लिए किसी आंकड़े पर भरोसा करने से पहले पाठकों को वास्तविक प्रदाता, नियोक्ता या प्राधिकारी रिकॉर्ड को सत्यापित करना चाहिए।"
      },
      {
        "heading": "सुधार और प्रतिक्रिया",
        "text": "यदि आपको कोई गलत सूत्र, स्रोत, अनुवाद या उदाहरण मिलता है, तो कृपया पृष्ठ का पता, प्रासंगिक इनपुट और अपेक्षित परिणाम हमारे संपर्क पते पर भेजें। पहचान दस्तावेज़, पूर्ण वेतन विवरण, खाता संख्या या अन्य अनावश्यक व्यक्तिगत जानकारी न भेजें। हम स्पष्टीकरण की जांच और अद्यतन करने के लिए एक प्रतिलिपि प्रस्तुत करने योग्य उदाहरण का उपयोग कर सकते हैं।"
      }
    ]
  },
  "fr": {
    "labels": {
      "home": "Calculatrices",
      "guides": "Guides de calcul",
      "policy": "Comment nous préparons ces guides",
      "title": "Guides de calcul : formules et exemples concrets",
      "description": "Calculs pratiques pour les dates, l'argent et les décisions quotidiennes. Choisissez une calculatrice et voyez la formule derrière la réponse.",
      "intro": "Commencez par la question à laquelle vous souhaitez répondre. Chaque guide explique la méthode, passe en revue les chiffres et propose des liens vers une calculatrice que vous pouvez utiliser avec vos propres entrées.",
      "global": "Argent, dates et calculs quotidiens",
      "country": "États-Unis : salaire, impôts et retraite",
      "quick": "Réponse rapide",
      "contents": "Sur cette page",
      "try": "Essayez la calculatrice",
      "related": "Guides associés",
      "questions": "Questions courantes",
      "references": "Sources et lectures complémentaires",
      "updated": "Mis à jour",
      "author": "Préparé par Myeotiji",
      "exampleNote": "Des exemples illustrent les hypothèses énoncées. Les frais, rendements et montants de paie réels peuvent différer.",
      "policyTitle": "Guides de calcul Myeotiji : sources et méthode éditoriale",
      "policyDescription": "Comment Myeotiji explique les calculs, vérifie les exemples, cite les sources et gère les corrections et les estimations.",
      "calculatorLink": "Voir la formule, un exemple concret et les erreurs courantes →",
      "homeTitle": "Calculatrices financières et quotidiennes gratuites | Myéotiji",
      "homeHeading": "Calculatrices gratuites pour l'argent, le travail et la vie quotidienne",
      "homeDescription": "Calculs pratiques pour les dates, l'argent et les décisions quotidiennes. Choisissez une calculatrice et voyez la formule derrière la réponse."
    },
    "guides": {
      "fee": {
        "title": "Calcul des frais : combien facturer pour recevoir le montant net souhaité ?",
        "description": "Calculez le produit net après pourcentage et frais fixes, puis inversez la formule pour trouver les frais nécessaires à un paiement cible.",
        "answer": "Soustrayez à la fois le pourcentage et les frais fixes des frais. Pour recevoir un montant particulier après frais, divisez l'objectif plus les frais fixes par un moins le taux en pourcentage.",
        "sections": [
          {
            "heading": "Séparez les deux parties des frais",
            "paragraphs": [
              "Un pourcentage de frais augmente avec le montant collecté ; ce n’est pas le cas des frais de transaction fixes. Écrivez le pourcentage sous forme décimale avant de multiplier. Pour des frais hypothétiques de 3 %, utilisez 0,03. Des frais fixes de 0,30 signifient 30 cents dans la devise que vous avez sélectionnée, et non un autre pourcentage.",
              "Produit net = frais × (1 − taux) − frais fixes. Vérifiez à quel montant le fournisseur applique son tarif : les frais d'expédition, les taxes, la conversion de devises et les frais transfrontaliers peuvent avoir un traitement distinct. Ce guide décrit l'arithmétique, et non le tarif actuel d'un fournisseur.",
              "Montant net = montant facturé × (1 − taux de frais) − frais fixes. Montant à facturer = (net souhaité + frais fixes) ÷ (1 − taux de frais)."
            ]
          },
          {
            "heading": "Un exemple concret : pourquoi ajouter 3 % ne suffit pas",
            "paragraphs": [
              "Supposons que vous perceviez 100 $ et que les frais hypothétiques soient de 3 % plus 0,30 $. La partie en pourcentage est de 3 $ ; l'ajout de la partie fixe donne des frais de 3,30 $ et un produit net de 96,70 $.",
              "Pour recevoir 100 $ net, résolvez les frais × 0,97 − 0,30 = 100. Les frais non arrondis requis sont 100,30 ÷ 0,97, soit environ 103,4021 $. Ajouter 3 % à 100 $ donne 103 $, dont le montant net n'est que de 99,61 $. La différence vient du fait que le fournisseur facture également des frais sur l’augmentation des frais."
            ],
            "table": {
              "headers": [
                "Frais",
                "Frais hypothétiques",
                "Filet"
              ],
              "rows": [
                [
                  "100,00 $",
                  "3,30 $",
                  "96,70 $"
                ],
                [
                  "103,00 $",
                  "3,39 $",
                  "99,61 $"
                ],
                [
                  "103,40 $",
                  "3,402 $ avant arrondi",
                  "99,998 $ avant arrondi"
                ]
              ]
            }
          },
          {
            "heading": "Utiliser le résultat comme vérification des prix",
            "paragraphs": [
              "Saisissez le montant collecté pour un calcul direct ou sélectionnez le mode cible-net pour un calcul inverse. Gardez la devise sélectionnée cohérente avec vos frais fixes. La sélection de la devise modifie le formatage ; il n'effectue pas de conversion de taux de change.",
              "L'écran arrondit le résultat pour l'afficher. Si un paiement minimum doit être atteint exactement, vérifiez le prochain plus petit incrément de devise et les règles d'arrondi de votre fournisseur. Les remboursements, les frais minimums, les taxes sur les frais et la question de savoir si les suppléments sont autorisés nécessitent des contrôles séparés."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Des frais de 0 % signifient-ils toujours que je reçois la totalité des frais ?",
            "answer": "Uniquement si les frais fixes sont également nuls et qu'aucune autre déduction ne s'applique. Un pourcentage de frais de 0 % plus des frais fixes de 0,30 $ laisse toujours 99,70 $ sur des frais de 100 $."
          },
          {
            "question": "Puis-je comparer différents prestataires de paiement ?",
            "answer": "Oui, saisissez le tarif publié et les frais fixes de chaque fournisseur en utilisant les mêmes frais. Comparez le résultat avec les éventuels frais supplémentaires et les conditions applicables à votre compte."
          }
        ]
      },
      "discount": {
        "title": "Remises successives : pourquoi 20 % puis 10 % donnent 28 %",
        "description": "Calculez les remises successives, comparez les combinaisons de coupons et distinguez le pourcentage du prix final du montant économisé.",
        "answer": "Appliquez la deuxième remise sur le prix déjà réduit. Une remise de 20 % suivie de 10 % laisse 80 % × 90 % = 72 % du prix d'origine, donc l'économie totale est de 28 %.",
        "sections": [
          {
            "heading": "Multipliez le prix que vous continuez à payer",
            "paragraphs": [
              "Pour chaque pourcentage de remise, soustrayez le taux décimal de un. Multipliez le prix initial par les fractions restantes. Avec deux remises, prix final = original × (1 − premier tarif) × (1 − deuxième tarif). Remise effective = 1 − prix final ÷ prix d'origine.",
              "L'ajout des tarifs traiterait les deux remises comme si elles s'appliquaient au prix d'origine. C'est une offre différente. Un magasin promettant une seule réduction de 30 % accorde un pourcentage de réduction plus important que les réductions successives de 20 % et 10 %, avant que d'autres conditions ne soient prises en compte."
            ]
          },
          {
            "heading": "Comparez deux offres sur un article à 100$",
            "paragraphs": [
              "Après les premiers 20 % de réduction, l'article coûte 80 $. La deuxième réduction de 10 % supprime 8 $, laissant 72 $. L'économie totale est de 28 $. Inverser l’ordre de deux pourcentages purs de remise donne le même résultat mathématique, car les facteurs de prix restants se multiplient.",
              "Cette règle d’ordre ne s’étend pas automatiquement à un coupon à valeur fixe. Un coupon de 10 $ après 20 % de réduction sur un article de 100 $ donne 70 $. Prendre 10 $ de réduction d'abord, puis appliquer 20 %, donne 72 $. Les dépenses minimales, les plafonds et les produits exclus peuvent modifier l'offre qui peut réellement être utilisée."
            ],
            "table": {
              "headers": [
                "Offre",
                "Prix final",
                "Économiser"
              ],
              "rows": [
                [
                  "20%, puis 10%",
                  "72 $",
                  "28%"
                ],
                [
                  "Une remise de 30%",
                  "70 $",
                  "30%"
                ],
                [
                  "20%, puis un coupon de 10$",
                  "70 $",
                  "30 $"
                ]
              ]
            }
          },
          {
            "heading": "Saisissez la réduction annoncée, pas le prix restant",
            "paragraphs": [
              "Les champs du calculateur prennent en compte les pourcentages de remise. Une étiquette indiquant de payer 80 % du prix initial signifie une réduction de 20 %. Entrer 80 calculerait plutôt une réduction de 80 %.",
              "L’outil modélise deux pourcentages de réduction successifs. Il n'ajoute pas de taxe de vente, de livraison, de remise en argent ou de coupons fixes. Comparez les totaux de paiement lorsque ces articles diffèrent et autorisez l'arrondi réel du vendeur à chaque étape."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Est-ce que 50 % de réduction suivi de 50 % de réduction sont gratuits ?",
            "answer": "Non. La moitié du prix initial reste après la première réduction, et la moitié après la seconde. Vous payez 25 % du prix initial, soit une économie de 75 %."
          },
          {
            "question": "Pourquoi l'économie sur mon reçu diffère-t-elle légèrement ?",
            "answer": "Un détaillant peut arrondir chaque article ou chaque remise séparément, ou appliquer des remises à différents montants éligibles. Cette calculatrice utilise les deux pourcentages indiqués avant d'afficher un résultat arrondi."
          }
        ]
      },
      "days": {
        "title": "Jours entre deux dates : premier jour, années bissextiles et jours calendaires",
        "description": "Comprenez les jours écoulés par rapport au nombre de dates incluses, les jours bissextiles, les week-ends et pourquoi un outil de jours calendaires est différent d'un calculateur de délais.",
        "answer": "Pour les jours calendaires écoulés, soustrayez la date de début de la date de fin. Si le jour de début est le jour 1, ajoutez-en un pour une plage de dates à venir. Du 1er janvier au 11 janvier, c'est 10 jours écoulés ou 11 jours inclus.",
        "sections": [
          {
            "heading": "Choisissez d'abord la convention de comptage",
            "paragraphs": [
              "Un séjour du lundi au mardi s'étend sur une nuit mais touche deux dates calendaires. Les deux nombres peuvent être corrects car ils répondent à des questions différentes. Décidez si vous souhaitez inclure les jours écoulés ou le nombre de dates dans une période avant de comparer les résultats.",
              "Pour une plage ascendante, l'option d'inclusion-démarrage de la calculatrice ajoute un jour. Une même date de début et de fin donne donc zéro jour écoulé ou un jour inclus. Une date de fin antérieure à la date de début donne un intervalle négatif ; inversez les dates lorsque vous souhaitez une période de transfert normale."
            ]
          },
          {
            "heading": "Travailler sur un exemple d’année bissextile",
            "paragraphs": [
              "En 2028, la période du 28 février au 1er mars s'étend sur deux jours écoulés car le 29 février se situe entre eux. Le comptage inclusif donne trois dates calendaires : le 28 février, le 29 février et le 1er mars. En 2027, la période du 28 février au 1er mars ne s'étend que sur un seul jour écoulé.",
              "L'outil normalise les dates du calendrier saisies au format UTC pour la soustraction. Cela empêche un changement d’heure d’été de transformer un intervalle de jours calendaires ordinaires en un jour fractionnaire. Il ne s'agit pas d'un calculateur de durées de vol ou d'heures exactes entre des horodatages spécifiques à un fuseau horaire."
            ],
            "table": {
              "headers": [
                "Dates",
                "Écoulé",
                "Y compris le début"
              ],
              "rows": [
                [
                  "1 janvier → 11 janvier",
                  "10 jours",
                  "11 jours"
                ],
                [
                  "Même date",
                  "0 jours",
                  "1 jour"
                ],
                [
                  "28 février → 1 mars 2028",
                  "2 jours",
                  "3 jours"
                ]
              ]
            }
          },
          {
            "heading": "Les jours calendaires ne signifient pas les jours ouvrables",
            "paragraphs": [
              "Les samedis, dimanches et jours fériés comptent tous comme jours calendaires. Pour planifier les congés, utilisez une calculatrice qui connaît les jours fériés du pays concerné et les jours de travail de substitution. Un décalage de date ne peut à lui seul déterminer le nombre de jours de congé payé dont vous avez besoin.",
              "Les contrats et les délais officiels peuvent définir différemment le premier jour, les heures limites de fin de journée et les prolongations des jours fériés. Vérifiez la règle applicable lorsqu’un délai non respecté est important. Pour les comptes à rebours et les anniversaires quotidiens, indiquez votre convention de comptage à côté du résultat."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Dois-je inclure le premier jour ?",
            "answer": "Incluez-le lorsque cette date compte comme le premier jour de la période. Laissez-le exclu lors de la mesure de l’écart écoulé entre les dates. Une règle issue d’un contrat ou d’une autorité a priorité sur une convention générale du calendrier."
          },
          {
            "question": "Est-ce que 30 jours équivalent toujours à un mois ?",
            "answer": "Non. Les mois civils ont des durées différentes. Utilisez les dates de début et de fin réelles plutôt que de convertir chaque mois en 30 jours."
          }
        ]
      },
      "stock-average": {
        "title": "Prix moyen des actions : moyenne pondérée après un nouvel achat",
        "description": "Utilisez une moyenne pondérée pour calculer un nouveau prix d'achat moyen, le total des actions et le montant investi sans le confondre avec un choix de lot fiscal.",
        "answer": "Additionnez les montants dépensés pour les actions existantes et nouvelles, puis divisez par le nombre total d'actions. La moyenne simple de deux prix ne fonctionne que lorsque les quantités partagées sont égales.",
        "sections": [
          {
            "heading": "Peser chaque achat par sa quantité",
            "paragraphs": [
              "Nouveau prix d'achat moyen = (quantité existante × moyenne existante + nouvelle quantité × nouveau prix) ÷ quantité totale. Les prix et les quantités doivent utiliser la même unité d'action et la même devise. Des fractions d’actions peuvent être utilisées lorsqu’elles reflètent vos avoirs réels.",
              "Par exemple, 100 actions achetées à 50 $ et 100 autres achetées à 40 $ coûtent au total 9 000 $. Divisez par 200 actions pour obtenir 45 $. Si le deuxième achat ne porte que sur 50 actions à 40 $, le total devient 7 000 $ sur 150 actions, ce qui donne environ 46,67 $, et non 45 $."
            ]
          },
          {
            "heading": "Une moyenne inférieure ne supprime pas une perte",
            "paragraphs": [
              "Immédiatement après avoir acheté les 100 actions supplémentaires à 40 $, une participation de 200 actions d'une valeur de 40 $ par action a une valeur marchande de 8 000 $ contre 9 000 $ dépensés. Le prix moyen a baissé, mais il reste une différence non réalisée de 1 000 $ et davantage d’argent est exposé à l’investissement.",
              "Un passage de 40 $ à la moyenne de 45 $ représenterait une augmentation de prix de 12,5 % avant frais. C’est de l’arithmétique, pas une prévision ou une raison d’acheter. Augmenter la position modifie le montant à risque ainsi que le prix moyen."
            ],
            "table": {
              "headers": [
                "Tenir",
                "Actions",
                "Montant dépensé"
              ],
              "rows": [
                [
                  "Existant : 50 $/action",
                  "100",
                  "5 000 $"
                ],
                [
                  "Nouveau : 40 $/action",
                  "100",
                  "4 000 $"
                ],
                [
                  "Moyenne combinée : 45$",
                  "200",
                  "9 000 $"
                ]
              ]
            }
          },
          {
            "heading": "Séparez les moyennes d'achat des dossiers fiscaux",
            "paragraphs": [
              "Le calculateur modélise deux blocs d'achats et exclut les frais de courtage, les taux de change, les dividendes, les ventes et les opérations sur titres. Convertissez les enregistrements de manière cohérente avant de comparer les achats effectués dans différentes devises.",
              "Une moyenne arithmétique de détention ne constitue pas une détermination de la base du coût imposable. Les règles de lotissement fiscal et les méthodes autorisées varient selon la juridiction et l'actif. Conservez les relevés de transactions originaux du courtier plutôt que de traiter ce résultat comme une instruction de déclaration fiscale."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Puis-je l'utiliser lors d'un achat à un prix plus élevé ?",
            "answer": "Oui. La même formule de moyenne pondérée s’applique. Acheter au-dessus de votre moyenne existante l’augmente ; l'ampleur du changement dépend de la nouvelle quantité."
          },
          {
            "question": "Pourquoi la moyenne de mon courtier est-elle différente ?",
            "answer": "Les frais, les conversions de devises, les arrondis, les opérations sur titres ou la méthode comptable d'un courtier peuvent être inclus dans son chiffre. Cet outil utilise uniquement les entrées de prix et de quantité indiquées."
          }
        ]
      },
      "compound": {
        "title": "Intérêts composés avec versements mensuels : formule et exemple",
        "description": "Comprenez les rendements annuels effectifs, les cotisations de fin de mois et la différence entre l’argent versé et la croissance hypothétique des investissements.",
        "answer": "Convertissez le rendement annuel effectif en taux mensuel, augmentez le solde existant, puis ajoutez la cotisation mensuelle. Séparez l’argent des cotisations de la croissance afin qu’un dépôt plus important ne soit pas confondu avec un meilleur rendement.",
        "sections": [
          {
            "heading": "Convertir l'hypothèse annuelle de manière cohérente",
            "paragraphs": [
              "Myeotiji traite le rendement annuel comme un taux annuel effectif. Le taux mensuel est (1 + taux annuel) ^ (1/12) - 1. À 5 % par an, ce taux mensuel est d'environ 0,4074 %, pas exactement 5 % ÷ 12. L'utilisation d'un taux nominal indiqué divisé par 12 décrirait une convention de composition différente.",
              "Pour chaque mois, nouveau solde = solde précédent × (1 + taux mensuel) + cotisation. Les cotisations sont ajoutées à la fin du mois, de sorte que le premier dépôt rapporte des rendements dans les mois suivants plutôt qu'avant d'être versé."
            ]
          },
          {
            "heading": "Vérifiez un exemple sur un an en séparant les dépôts",
            "paragraphs": [
              "Commencez avec 1 000 $, cotisez 100 $ à la fin de chaque mois et supposez un rendement annuel effectif constant de 5 % pendant un an. Le montant de départ de 1 000 $ passe à 1 050 $ ; les douze dépôts mensuels s'élèvent à environ 1 227,26 $. Le total est d’environ 2 277,26 $.",
              "Vous avez fourni 2 200 $ : 1 000 $ initialement plus douze dépôts de 100 $. Les 77,26 $ restants correspondent à une croissance modélisée. Avec un rendement de 0 %, le solde est exactement de 2 200 $. Cette comparaison sans retour est utile pour vérifier si les entrées ont du sens."
            ],
            "table": {
              "headers": [
                "Scénario sur un an",
                "Argent fourni",
                "Solde estimé"
              ],
              "rows": [
                [
                  "0 % de rendement annuel",
                  "2 200 $",
                  "2 200,00 $"
                ],
                [
                  "Rendement annuel effectif de 5 %",
                  "2 200 $",
                  "2 277,26 $"
                ]
              ]
            }
          },
          {
            "heading": "Utilisez des scénarios plutôt qu’un résultat promis",
            "paragraphs": [
              "Comparez les hypothèses inférieures, moyennes et supérieures tout en maintenant les dépôts constants. Les investissements réels ne génèrent pas un rendement mensuel régulier, et l’ordre des gains et des pertes compte lorsque de l’argent est ajouté ou retiré.",
              "Le résultat ne déduit pas l’impôt, les frais d’investissement ou l’inflation. Il ne s'agit ni d'un devis de dépôt ni d'une prévision d'un investissement spécifique. Si une banque ou un fournisseur indique un taux nominal, un calendrier de cotisation différent ou un calendrier de composition différent, alignez ces conventions avant de comparer son illustration avec cet outil."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Les cotisations mensuelles sont-elles versées en début ou en fin de mois ?",
            "answer": "A la fin de chaque mois modélisé. Un calendrier de début de mois donne à chaque contribution un mois supplémentaire de croissance et peut produire un solde différent."
          },
          {
            "question": "Le résultat inclut-il les impôts ou l’inflation ?",
            "answer": "Non. Le résultat est un bilan hypothétique avant ces effets. Un solde nominal et son pouvoir d'achat futur sont des quantités différentes."
          }
        ]
      },
      "unit-converter": {
        "title": "Convertir les unités : longueur, température et stockage numérique",
        "description": "Convertissez les mesures courantes tout en vérifiant le volume américain par rapport au volume impérial, les décalages de température et les unités de stockage décimales par rapport aux unités binaires.",
        "answer": "Convertissez via une unité de base commune et vérifiez d’abord la définition de l’unité. Un gallon américain diffère d'un gallon impérial et un gigaoctet décimal diffère d'un gibioctet. La température a également besoin d'un décalage, pas seulement d'un multiplicateur.",
        "sections": [
          {
            "heading": "Facteurs de conversion utilisant la longueur, la masse, la surface et le volume",
            "paragraphs": [
              "Pour les unités de même dimension, convertissez la quantité source en unité de base et divisez-la par le facteur de l'unité de destination. Un mile équivaut à 1,609344 kilomètres, donc 5 miles équivaut à 8,04672 kilomètres. Ne confondez pas un facteur de longueur avec un facteur de surface : les unités carrées nécessitent une conversion au carré.",
              "Le menu de volume utilise explicitement les gallons liquides américains et les tasses américaines. Un gallon liquide américain équivaut à 3,785411784 litres ; ce n'est pas le plus gros gallon impérial. La tasse d'une recette peut utiliser une autre convention, alors vérifiez la recette ou le récipient doseur avant d'appliquer un numéro."
            ]
          },
          {
            "heading": "La température et le stockage sont des pièges courants",
            "paragraphs": [
              "Pour Celsius en Fahrenheit, utilisez °F = °C × 9/5 + 32. Pour l’inverse, utilisez °C = (°F − 32) × 5/9. C'est pourquoi 100°F équivaut à environ 37,78°C plutôt qu'un résultat obtenu en multipliant 100 par 5/9 seul.",
              "Les unités de stockage décimales utilisent des puissances de 1 000 ; les unités binaires utilisent des puissances de 1 024. Ici, 1 Go équivaut à 1 000 000 000 d'octets, tandis que 1 Gio équivaut à 1 073 741 824 octets. Il s'agit de quantités de données, et non de vitesses de connexion Internet ou de temps de transfert de fichiers."
            ],
            "table": {
              "headers": [
                "Entrée",
                "Valeur convertie"
              ],
              "rows": [
                [
                  "1 mille",
                  "1,609344 km"
                ],
                [
                  "1 gallon liquide américain",
                  "3.785411784L"
                ],
                [
                  "100°F",
                  "37,777…°C"
                ],
                [
                  "1 Gio",
                  "1 073 741 824B"
                ]
              ]
            }
          },
          {
            "heading": "Gardez une précision totale jusqu'à la dernière étape",
            "paragraphs": [
              "Choisissez une catégorie, entrez une valeur et sélectionnez les unités source et de destination. La calculatrice affiche jusqu'à huit décimales, donc une très petite quantité peut nécessiter une unité de destination plus petite pour rester lisible.",
              "Arrondir un facteur de conversion avant de multiplier peut amplifier une erreur. Pour les travaux de fabrication tolérants, les rapports scientifiques ou une norme industrielle prescrite, vérifiez la précision requise et la définition exacte utilisée dans ce contexte."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Puis-je convertir les grammes directement en millilitres ?",
            "answer": "Non sans la densité du matériau. Les grammes mesurent la masse et les millilitres mesurent le volume ; une conversion entre eux n’est pas un facteur unitaire universel."
          },
          {
            "question": "Le gallon du menu signifie-t-il un gallon impérial britannique ?",
            "answer": "Non. Le menu est étiqueté US gal et utilise le gallon liquide américain. Utilisez la définition requise par votre matériel source."
          }
        ]
      },
      "age": {
        "title": "Calcul de l’âge : anniversaire, années révolues et jours écoulés",
        "description": "Calculez les années révolues, distinguez l'âge des différences entre les années civiles et comprenez les conventions de date locale et d'anniversaire bissextile.",
        "answer": "Soustrayez l’année de naissance de l’année de référence, puis soustrayez-en une si l’anniversaire n’a pas encore eu lieu cette année-là. Myeotiji utilise la date du calendrier d'aujourd'hui dans votre navigateur comme date de référence.",
        "sections": [
          {
            "heading": "Une différence d'un an n'est pas toujours un âge révolu",
            "paragraphs": [
              "Une personne née le 31 décembre 2000 aura 25 ans le 30 décembre 2026 et aura 26 ans le 31 décembre. Soustraire simplement 2000 de 2026 un jour plus tôt reviendrait à surestimer l'âge révolu d'un.",
              "Comparez d'abord le mois, puis le jour. Si le mois de référence est antérieur au mois de naissance, soustrayez une année. Si les mois correspondent mais que le jour de référence est antérieur, soustrayez-en également un. Sinon, gardez la différence d'année."
            ]
          },
          {
            "heading": "Comprendre la date utilisée par la calculatrice",
            "paragraphs": [
              "Entrez la date de naissance dans le calculateur d'âge. Il utilise la date actuelle du calendrier local de votre navigateur et signale également les jours calendaires écoulés depuis la naissance. Les dates de référence dans le tableau de ce guide sont des illustrations fixes ; l'outil en direct ne fournit pas de champ de date de référence historique distinct.",
              "Les utilisateurs de différents fuseaux horaires peuvent voir différents âges vers minuit le jour d'un anniversaire. Le décompte des jours utilise uniquement l’arithmétique de la date, plutôt que l’heure exacte de naissance. Une date de naissance future ne constitue pas une entrée d'âge révolu valide."
            ],
            "table": {
              "headers": [
                "Date de naissance",
                "Date de référence en exemple",
                "Âge révolu"
              ],
              "rows": [
                [
                  "2000-12-31",
                  "2026-12-30",
                  "25"
                ],
                [
                  "2000-12-31",
                  "2026-12-31",
                  "26"
                ],
                [
                  "2000-12-31",
                  "2027-01-01",
                  "26"
                ]
              ]
            }
          },
          {
            "heading": "Les jours bissextiles et les règles d’éligibilité officielles doivent être pris en compte",
            "paragraphs": [
              "Pour un anniversaire le 29 février, cet outil compare directement le mois et le jour. Dans une année non bissextile, le nombre d'années révolues augmente le 1er mars. Il s'agit d'une convention de calcul déclarée, et non d'une décision sur l'âge légal dans chaque juridiction.",
              "Une admission, une prestation, un contrat d'assurance ou toute autre démarche officielle peut utiliser un âge à une date précise ou une règle particulière d'anniversaire. Vérifiez la définition de ce processus. Un résultat quotidien selon l’âge actuel ne peut pas remplacer son évaluation d’éligibilité."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Pourquoi le résultat peut-il différer de l’année indiquée dans un calendrier ?",
            "answer": "La soustraction de l'année civile ne tient pas compte de la date ou non de l'anniversaire. L'âge atteint compte les anniversaires réellement atteints selon la convention de date indiquée."
          },
          {
            "question": "Puis-je utiliser les jours écoulés divisés par 365 à la place ?",
            "answer": "Pas pour un âge exact d’une année révolue. Les années bissextiles et la position de l’anniversaire rendent ce raccourci peu fiable en ce qui concerne les limites d’âge."
          }
        ]
      }
    },
    "legalLabels": {
      "privacy": "Confidentialité et cookies",
      "terms": "Utilisation et limites",
      "contact": "Contact & corrections",
      "notice": "Estimations pour information générale. Ce service ne fournit pas de conseils fiscaux, juridiques, de paie ou d'investissement aux particuliers, ne prépare pas de déclarations et ne vous représente pas. Vérifiez l’année indiquée, le lieu et les exclusions avant de vous fier à un résultat.",
      "tracking": "Google Analytics est activé par défaut et peut être désactivé au bas de la page. Les entrées des calculatrices ne sont pas envoyées. AdSense est connecté pour demander des annonces non personnalisées. Google et ses partenaires peuvent utiliser des cookies, balises web, adresses IP et identifiants pour diffuser et mesurer les annonces. Des annonces non personnalisées peuvent aussi utiliser des cookies. Leur affichage dépend de l’approbation du site et des paramètres du compte, notamment du consentement applicable. Les pages chinoises gardent analyses et annonces désactivées."
    },
    "legal": {
      "privacy": [
        [
          "Portée et opérateur",
          "Myeotiji est exploité depuis la Corée du Sud. Cet avis concerne les pages en français. Contact : contact@myeotiji.kr. Les autres langues peuvent avoir des paramètres différents."
        ],
        [
          "Entrées de la calculatrice",
          "Les calculs s'exécutent dans votre navigateur. Cette version n'envoie pas les montants du calculateur, le salaire, les dates ou les résultats à une base de données d'opérateur ou à un service d'analyse. Ne placez pas de données personnelles dans des URL et ne nous envoyez pas de documents d’identité, de détails de compte ou de fiches de paie."
        ],
        [
          "Analyses, publicités et cookies",
          "Google Analytics est activé par défaut et peut être désactivé au bas de la page. Les entrées des calculatrices ne sont pas envoyées. AdSense est connecté pour demander des annonces non personnalisées. Google et ses partenaires peuvent utiliser des cookies, balises web, adresses IP et identifiants pour diffuser et mesurer les annonces. Des annonces non personnalisées peuvent aussi utiliser des cookies. Leur affichage dépend de l’approbation du site et des paramètres du compte, notamment du consentement applicable. Les pages chinoises gardent analyses et annonces désactivées."
        ],
        [
          "Hébergement nécessaire et traitement à l’étranger",
          "Vercel délivre et protège ce site Internet. Les demandes exposent nécessairement des informations de connexion telles que l'adresse IP, l'URL demandée, l'heure, les en-têtes de l'appareil/navigateur et les signaux de sécurité à l'infrastructure d'hébergement. Ces informations peuvent être traitées en dehors de votre pays, y compris aux États-Unis ou dans d'autres emplacements d'infrastructure. La désactivation de l'analyse ne supprime pas ce traitement. Nous l'utilisons pour la livraison, la sécurité et les enquêtes sur les défauts, et non pour des profils publicitaires."
        ],
        [
          "La rétention et vos choix",
          "Les entrées de la calculatrice ne sont pas conservées par nous en tant qu'enregistrements sur le serveur. Les journaux d'hébergement suivent la rétention du fournisseur et les paramètres de projet applicables ; nous n'avons pas vérifié une seule période de conservation fixe pour tous les journaux d'infrastructure. Contactez-nous pour obtenir les détails applicables ou pour demander l'accès, la correction, la suppression ou la restriction lorsque cela est disponible en vertu de votre loi. Nous évaluons les demandes et les exceptions légales et ne promettons pas que tous les journaux des fournisseurs puissent être immédiatement supprimés. La fermeture de la page efface son état de calcul en mémoire ; votre navigateur peut conserver l'historique ou restaurer un onglet."
        ],
        [
          "E-mail et liens externes",
          "Si vous choisissez de nous envoyer un e-mail, nous recevons votre adresse et votre message pour traiter la demande et ne conservons que ce qui est nécessaire à cette fin ou à nos obligations légales. Utilisez des exemples fictifs, et non de véritables dossiers financiers personnels. L'e-mail n'est pas requis pour le calcul. Les références officielles ouvrent des sites Web tiers avec leurs propres politiques. Les modifications apportées au suivi ou à l'utilisation des données nécessitent la mise à jour de cet avis et la mise en œuvre de tous les choix légalement requis avant l'activation."
        ]
      ],
      "terms": [
        [
          "Objectif",
          "Arithmétique et explications générales gratuites et en libre-service. Nous ne nous présentons pas comme votre avocat, comptable, préparateur de déclarations de revenus, fournisseur de paie, conseiller en investissement ou organisme gouvernemental. Aucune relation professionnel-client ne se crée simplement à l’aide d’une calculatrice."
        ],
        [
          "Vérifiez les hypothèses",
          "Les résultats sont des estimations pour l’année, la juridiction et le modèle indiqués. Le statut fiscal, les exonérations, les documents du régime, les règles locales, les arrondis et les modifications de la loi peuvent modifier les résultats réels. Un exemple n'est pas une garantie. Vérifiez auprès du service officiel compétent ou d'un professionnel qualifié avant de déposer une demande, de payer un salaire, d'investir, de faire un don ou de réserver un voyage."
        ],
        [
          "Limites spécifiques",
          "Les heures supplémentaires aux États-Unis utilisent la base de référence fédérale couverte et non exonérée, et non toutes les règles des États. Le salaire net est une illustration annuelle simplifiée, et non un calcul W-4 ou de dépôt. Une correspondance 401(k) n’est pas un solde acquis ni une recommandation de contribution. Les outils de moyenne boursière et composés ne recommandent pas de titres ni ne garantissent les rendements. Les outils de date et d’âge ne décident pas de l’éligibilité légale ni des délais."
        ],
        [
          "Erreurs et responsabilité",
          "Signalez une erreur suspectée à l’aide d’entrées fictives et de l’URL concernée. Nous pouvons corriger, avertir ou restreindre temporairement un outil concerné lorsque ses hypothèses ne peuvent pas être vérifiées. Cet avis décrit la portée ; il n'exclut pas la responsabilité qui ne peut légalement être exclue, y compris la responsabilité applicable en cas de faute intentionnelle ou de négligence grave, ni ne supprime les droits obligatoires des consommateurs."
        ],
        [
          "Prise en charge et modifications",
          "Le support gère les défauts techniques et les corrections générales des sources. Ne demandez pas de positions fiscales individuelles, de décisions juridiques, de préparation de dossiers ou de représentation. Nous adresserons ces demandes à l’autorité compétente ou à un professionnel qualifié. Les changements importants sont reflétés dans la date de la page ; revérifiez les hypothèses à chaque fois."
        ]
      ],
      "contact": [
        [
          "Problèmes techniques, corrections et demandes de confidentialité",
          "Envoyez un e-mail à contact@myeotiji.kr avec l'URL de la page, l'année/la région applicable et un exemple fictif montrant le résultat attendu et affiché. Vous pouvez également demander des informations sur le traitement des données ou exercer les droits de confidentialité applicables ici. Nous n'avons pas besoin d'un compte ou d'un formulaire."
        ],
        [
          "Protégez vos informations",
          "N’envoyez pas par courrier électronique des identifiants gouvernementaux, des comptes bancaires, des mots de passe, des fiches de paie complètes ou de véritables documents fiscaux. Nous n’offrons pas de consultations fiscales, juridiques ou d’investissement personnelles et n’agissons pas en votre nom. Pour une date limite de dépôt, de paiement ou d’emploi, contactez directement l’autorité compétente ou un professionnel qualifié."
        ]
      ]
    },
    "policy": [
      {
        "heading": "Objectif et paternité",
        "text": "Myeotiji publie des explications sur les calculatrices disponibles sur ce site. Ces guides ont été préparés avec l’aide de l’IA et vérifiés par rapport à la méthode de calcul indiquée, aux exemples concrets et aux références citées. Le nom de l'auteur identifie Myeotiji comme le service de publication ; il ne prétend pas être examiné par un comptable, un avocat ou un conseiller réglementé désigné."
      },
      {
        "heading": "Sources, dates et règles applicables",
        "text": "Pour les sujets liés au droit, à la fiscalité, à la paie et aux assurances sociales, nous privilégions les publications des autorités publiques compétentes et les liens vers les documents pertinents. Les conditions du fournisseur et les normes techniques sont identifiées comme telles. Un exemple mathématique écrit par Myeotiji est une illustration et non une citation d'une autorité. La date de mise à jour visible enregistre une révision du contenu matériel, et non une actualisation quotidienne automatique. Le pays, l’année et les exclusions indiquées dans chaque guide sont importants."
      },
      {
        "heading": "Ce qu'un calcul peut et ne peut pas établir",
        "text": "Nous vérifions des exemples numériques représentatifs et des conditions aux limites. Les modèles simples omettent toujours les faits susceptibles de modifier un paiement ou un droit réel. Une croissance hypothétique des investissements n’est pas un rendement promis, et une estimation de la masse salariale n’est pas une évaluation fiscale finale. Les exemples utilisent les hypothèses indiquées ; les lecteurs doivent vérifier les dossiers réels du fournisseur, de l'employeur ou de l'autorité avant de se fier à un chiffre pour prendre une décision conséquente."
      },
      {
        "heading": "Corrections et retours",
        "text": "Si vous trouvez une formule, une source, une traduction ou un exemple incorrect, veuillez envoyer l'adresse de la page, les entrées pertinentes et le résultat que vous attendiez à notre adresse de contact. N'envoyez pas de documents d'identification, de relevés de salaire complets, de numéros de compte ou d'autres informations personnelles inutiles. Nous pouvons utiliser un exemple reproductible pour étudier et mettre à jour l’explication."
      }
    ]
  },
  "ar": {
    "labels": {
      "home": "الآلات الحاسبة",
      "guides": "أدلة الحساب",
      "policy": "كيف نقوم بإعداد هذه الأدلة",
      "title": "أدلة الحساب: الصيغ والأمثلة العملية",
      "description": "الحسابات العملية للتواريخ والمال والقرارات اليومية. اختر آلة حاسبة وشاهد الصيغة وراء الإجابة.",
      "intro": "ابدأ بالسؤال الذي تريد الإجابة عليه. يشرح كل دليل الطريقة، ويعمل من خلال الأرقام والروابط إلى الآلة الحاسبة التي يمكنك استخدامها مع المدخلات الخاصة بك.",
      "global": "المال والتواريخ والحسابات اليومية",
      "country": "الولايات المتحدة: الأجور والضرائب والتقاعد",
      "quick": "إجابة سريعة",
      "contents": "في هذه الصفحة",
      "try": "جرب الآلة الحاسبة",
      "related": "أدلة ذات صلة",
      "questions": "الأسئلة الشائعة",
      "references": "المصادر ومزيد من القراءة",
      "updated": "تم التحديث",
      "author": "من إعداد ميوتيجي",
      "exampleNote": "وتوضح الأمثلة الافتراضات المذكورة. يمكن أن تختلف الرسوم الفعلية والعائدات ومبالغ الرواتب.",
      "policyTitle": "أدلة حساب Myeotiji: المصادر وطريقة التحرير",
      "policyDescription": "كيف يشرح Myeotiji الحسابات ويتحقق من الأمثلة ويستشهد بالمصادر ويتعامل مع التصحيحات والتقديرات.",
      "calculatorLink": "راجع الصيغة والمثال العملي والأخطاء الشائعة →",
      "homeTitle": "الآلات الحاسبة المالية واليومية المجانية | ميوتيجي",
      "homeHeading": "الآلات الحاسبة المجانية للمال والعمل والحياة اليومية",
      "homeDescription": "الحسابات العملية للتواريخ والمال والقرارات اليومية. اختر آلة حاسبة وشاهد الصيغة وراء الإجابة."
    },
    "guides": {
      "fee": {
        "title": "حساب الرسوم: كم تطلب لتحصل على المبلغ الصافي المطلوب؟",
        "description": "احسب صافي العائدات بعد النسبة المئوية والرسوم الثابتة، ثم اعكس الصيغة للعثور على الرسوم اللازمة للدفع المستهدف.",
        "answer": "اطرح كلاً من النسبة المئوية للرسوم والرسوم الثابتة من الرسوم. للحصول على مبلغ معين بعد الرسوم، قم بتقسيم الهدف بالإضافة إلى الرسوم الثابتة على واحد ناقص معدل النسبة المئوية.",
        "sections": [
          {
            "heading": "افصل بين جزأين من الرسوم",
            "paragraphs": [
              "تنمو النسبة المئوية للرسوم مع المبلغ الذي تم جمعه؛ رسوم المعاملات الثابتة لا. اكتب النسبة المئوية على صورة عدد عشري قبل الضرب. للحصول على رسوم افتراضية قدرها 3%، استخدم 0.03. الرسوم الثابتة البالغة 0.30 تعني 30 سنتًا بالعملة التي حددتها، وليس نسبة مئوية أخرى.",
              "صافي العائدات = الرسوم × (1 - المعدل) - الرسوم الثابتة. تحقق من المبلغ الذي يطبق عليه المزود سعره: الشحن والضرائب وتحويل العملات والرسوم عبر الحدود قد يكون لها معاملة منفصلة. يصف هذا الدليل العملية الحسابية، وليس التعريفة الحالية لأي مزود.",
              "الصافي = المبلغ المحصل × (1 − نسبة الرسوم) − الرسوم الثابتة. المبلغ المطلوب تحصيله = (الصافي المستهدف + الرسوم الثابتة) ÷ (1 − نسبة الرسوم)."
            ]
          },
          {
            "heading": "مثال عملي: لماذا إضافة 3% ليس كافياً",
            "paragraphs": [
              "لنفترض أنك جمعت 100 دولار وأن الرسوم الافتراضية هي 3% بالإضافة إلى 0.30 دولار. الجزء المئوي هو 3 دولارات؛ تؤدي إضافة الجزء الثابت إلى رسم قدره 3.30 دولارًا أمريكيًا وعائدات صافية قدرها 96.70 دولارًا أمريكيًا.",
              "للحصول على صافي 100 دولار، قم بحل الرسوم × 0.97 − 0.30 = 100. الرسوم المطلوبة غير المقربة هي 100.30 ÷ 0.97، أي حوالي 103.4021 دولار. إضافة 3% إلى 100 دولار يعطي 103 دولارات، صافيها 99.61 دولار فقط. ينشأ الفرق لأن المزود يفرض رسومًا على الرسوم المتزايدة أيضًا."
            ],
            "table": {
              "headers": [
                "تهمة",
                "رسوم افتراضية",
                "صافي"
              ],
              "rows": [
                [
                  "100.00 دولار",
                  "3.30 دولار",
                  "96.70 دولارًا"
                ],
                [
                  "103.00 دولار",
                  "3.39 دولار",
                  "99.61 دولارًا"
                ],
                [
                  "103.40 دولار",
                  "3.402 دولار قبل التقريب",
                  "99.998 دولارًا قبل التقريب"
                ]
              ]
            }
          },
          {
            "heading": "استخدم النتيجة كفحص للتسعير",
            "paragraphs": [
              "أدخل المبلغ الذي تم جمعه للحساب الآجل، أو حدد وضع الشبكة المستهدفة للحساب العكسي. اجعل العملة المحددة متوافقة مع الرسوم الثابتة الخاصة بك. تحديد العملة يغير التنسيق؛ ولا يقوم بإجراء تحويل لسعر الصرف.",
              "تقوم الشاشة بتقريب النتيجة للعرض. إذا كان من الضروري استيفاء الحد الأدنى للدفع تمامًا، فتحقق من أصغر زيادة في العملة التالية وقواعد التقريب الخاصة بمزود الخدمة الخاص بك. المبالغ المستردة، والحد الأدنى من الرسوم، والضرائب على الرسوم وما إذا كان مسموحًا برسوم إضافية تتطلب فحوصات منفصلة."
            ]
          }
        ],
        "faqs": [
          {
            "question": "هل الرسوم البالغة 0% تعني دائمًا أنني أتلقى الرسوم بالكامل؟",
            "answer": "فقط إذا كانت الرسوم الثابتة أيضًا صفرًا ولا ينطبق أي خصم آخر. لا تزال الرسوم المئوية بنسبة 0% بالإضافة إلى الرسوم الثابتة البالغة 0.30 دولارًا تترك 99.70 دولارًا من الرسوم البالغة 100 دولار."
          },
          {
            "question": "هل يمكنني مقارنة مقدمي خدمات الدفع المختلفين؟",
            "answer": "نعم، أدخل السعر المنشور لكل مزود والرسوم الثابتة باستخدام نفس الرسوم. قارن النتيجة بأي رسوم إضافية والشروط المطبقة على حسابك."
          }
        ]
      },
      "discount": {
        "title": "خصم 20% ثم 10%: لماذا يكون الخصم الإجمالي 28%؟",
        "description": "احسب الخصومات المتتالية، وقارن مجموعات القسائم، وميز نسبة السعر النهائي عن المبلغ الذي تم توفيره.",
        "answer": "قم بتطبيق الخصم الثاني على السعر المخفض بالفعل. خصم 20% يتبعه 10% يترك 80% × 90% = 72% من السعر الأصلي، فيكون إجمالي التوفير 28%.",
        "sections": [
          {
            "heading": "اضرب السعر الذي تستمر في دفعه",
            "paragraphs": [
              "لكل نسبة خصم، قم بطرح المعدل العشري من واحد. اضرب السعر الأصلي بالكسور المتبقية. مع خصمين السعر النهائي = الأصلي × (1 − الدرجة الأولى) × (1 − الدرجة الثانية). الخصم الفعلي = 1 – السعر النهائي ÷ السعر الأصلي.",
              "ستؤدي إضافة الأسعار إلى التعامل مع كلا الخصمين كما لو كانا مطبقين على السعر الأصلي. هذا عرض مختلف. المتجر الذي يعد بتخفيض واحد بنسبة 30% يعطي تخفيضًا بنسبة أكبر من التخفيضات المتتالية البالغة 20% و10%، قبل النظر في الشروط الأخرى."
            ]
          },
          {
            "heading": "قارن عرضين على منتج بقيمة 100 دولار",
            "paragraphs": [
              "بعد التخفيض الأول بنسبة 20%، تبلغ تكلفة المنتج 80 دولارًا. التخفيض الثاني بنسبة 10% يزيل 8 دولارات، ويتبقى 72 دولارًا. إجمالي التوفير هو 28 دولارًا. إن عكس ترتيب خصمين مئويين خالصين يعطي نفس النتيجة الرياضية، لأن عوامل السعر المتبقية تتضاعف.",
              "لا تمتد قاعدة الطلب هذه تلقائيًا إلى قسيمة ذات قيمة ثابتة. قسيمة بقيمة 10 دولارات بعد خصم 20٪ على منتج بقيمة 100 دولار تمنحك 70 دولارًا. أخذ خصم 10 دولارات أولاً ثم تطبيق 20% يعطيك 72 دولارًا. يمكن أن يؤدي الحد الأدنى للإنفاق والحدود القصوى والمنتجات المستبعدة إلى تغيير العرض الذي يمكن استخدامه فعليًا."
            ],
            "table": {
              "headers": [
                "العرض",
                "السعر النهائي",
                "الادخار"
              ],
              "rows": [
                [
                  "20% ثم 10%",
                  "72 دولارًا",
                  "28%"
                ],
                [
                  "خصم واحد 30%",
                  "70 دولارًا",
                  "30%"
                ],
                [
                  "20% ثم قسيمة 10 دولار",
                  "70 دولارًا",
                  "30 دولارًا"
                ]
              ]
            }
          },
          {
            "heading": "أدخل التخفيض المعلن عنه، وليس السعر المتبقي",
            "paragraphs": [
              "تأخذ حقول الآلة الحاسبة نسب الخصم. الملصق الذي يقول ادفع 80% من السعر الأصلي يعني خصم 20%. سيؤدي إدخال 80 بدلاً من ذلك إلى حساب تخفيض بنسبة 80%.",
              "تصمم الأداة تخفيضين متتاليين في النسبة المئوية. لا يضيف ضريبة المبيعات أو التسليم أو الاسترداد النقدي أو الكوبونات الثابتة. قارن إجماليات الخروج عندما تختلف هذه العناصر، واسمح بالتقريب الفعلي للبائع في كل خطوة."
            ]
          }
        ],
        "faqs": [
          {
            "question": "هل خصم 50% يليه خصم 50% مجاني؟",
            "answer": "لا، يبقى نصف السعر الأصلي بعد التخفيض الأول، ويبقى النصف بعد التخفيض الثاني. أنت تدفع 25% من السعر الأصلي، وتوفير 75%."
          },
          {
            "question": "لماذا يختلف التوفير في إيصالي قليلاً؟",
            "answer": "يجوز لمتاجر التجزئة تقريب كل عنصر أو كل خصم على حدة، أو تطبيق الخصومات على مبالغ مؤهلة مختلفة. تستخدم هذه الآلة الحاسبة النسبتين المذكورتين قبل عرض نتيجة مقربة."
          }
        ]
      },
      "days": {
        "title": "عدد الأيام بين تاريخين: احتساب اليوم الأول والسنة الكبيسة",
        "description": "افهم الأيام المنقضية مقابل أعداد التاريخ الشاملة والأيام الكبيسة وعطلات نهاية الأسبوع وسبب اختلاف أداة اليوم التقويمي عن حاسبة الموعد النهائي.",
        "answer": "بالنسبة للأيام التقويمية المنقضية، قم بطرح تاريخ البدء من تاريخ الانتهاء. إذا كان يوم البدء هو اليوم الأول، أضف واحدًا لنطاق زمني للأمام. من 1 يناير إلى 11 يناير هو 10 أيام منقضية أو 11 يومًا شاملة.",
        "sections": [
          {
            "heading": "اختر اتفاقية العد أولاً",
            "paragraphs": [
              "تمتد الإقامة من الاثنين إلى الثلاثاء لليلة واحدة ولكنها تلامس تاريخين تقويميين. يمكن أن يكون كلا الرقمين صحيحين لأنهما يجيبان على أسئلة مختلفة. حدد ما إذا كنت تريد الأيام المنقضية أو عدد التواريخ المضمنة في فترة ما قبل مقارنة النتائج.",
              "بالنسبة للنطاق التصاعدي، يضيف خيار التضمين والبدء في الآلة الحاسبة يومًا واحدًا. وبالتالي فإن نفس تاريخ البدء والانتهاء يعطي صفرًا من الأيام المنقضية أو يومًا واحدًا شاملاً. تاريخ الانتهاء قبل تاريخ البدء يعطي فاصل زمني سلبي؛ قم بعكس التواريخ عندما تريد فترة عادية للأمام."
            ]
          },
          {
            "heading": "العمل من خلال مثال سنة كبيسة",
            "paragraphs": [
              "في عام 2028، يمتد الفترة من 28 فبراير إلى 1 مارس على مدار يومين منقضيين، لأن يوم 29 فبراير يقع بينهما. يعطي العد الشامل ثلاثة تواريخ تقويمية: 28 فبراير، و29 فبراير، و1 مارس. وفي عام 2027، يمتد الفترة من 28 فبراير إلى 1 مارس يومًا واحدًا منقضيًا فقط.",
              "تقوم الأداة بتطبيع تواريخ التقويم المدخلة إلى التوقيت العالمي المنسق (UTC) للطرح. يمنع هذا تغيير الساعة التوقيت الصيفي من تحويل الفاصل الزمني العادي ليوم التقويم إلى يوم كسري. إنها ليست آلة حاسبة لمدد الرحلة أو الساعات المحددة بين الطوابع الزمنية الخاصة بالمنطقة الزمنية."
            ],
            "table": {
              "headers": [
                "التواريخ",
                "انقضى",
                "بما في ذلك البداية"
              ],
              "rows": [
                [
                  "1 يناير → 11 يناير",
                  "10 أيام",
                  "11 يوما"
                ],
                [
                  "نفس التاريخ",
                  "0 أيام",
                  "يوم واحد"
                ],
                [
                  "28 فبراير → 1 مارس 2028",
                  "2 أيام",
                  "3 أيام"
                ]
              ]
            }
          },
          {
            "heading": "أيام التقويم لا تعني أيام العمل",
            "paragraphs": [
              "يتم احتساب أيام السبت والأحد والعطلات الرسمية كأيام تقويمية. للتخطيط للإجازات، استخدم الآلة الحاسبة التي تعرف أيام العطل في البلد المعني وأيام العمل البديلة. لا يمكن لفارق التاريخ وحده تحديد عدد أيام الإجازة مدفوعة الأجر التي تحتاجها.",
              "يمكن أن تحدد العقود والمواعيد النهائية الرسمية اليوم الأول ومواعيد نهاية اليوم وتمديدات العطلات بشكل مختلف. تحقق من القاعدة الحاكمة عندما يكون الموعد النهائي المفقود مهمًا. بالنسبة لعمليات العد التنازلي واحتفالات الذكرى السنوية اليومية، اذكر اتفاقية العد الخاصة بك بجانب النتيجة."
            ]
          }
        ],
        "faqs": [
          {
            "question": "هل يجب أن أدرج اليوم الأول؟",
            "answer": "قم بتضمينه عندما يتم احتساب هذا التاريخ باعتباره اليوم الأول من الفترة. اتركها مستبعدة عند قياس الفجوة المنقضية بين التواريخ. تتمتع قاعدة من عقد أو سلطة بالأولوية على اتفاقية التقويم العامة."
          },
          {
            "question": "هل 30 يوما تساوي دائما شهرا واحدا؟",
            "answer": "لا، الأشهر التقويمية لها أطوال مختلفة. استخدم تواريخ البدء والانتهاء الفعلية بدلاً من التحويل كل شهر إلى 30 يومًا."
          }
        ]
      },
      "stock-average": {
        "title": "متوسط سعر الأسهم: حساب المتوسط المرجح بعد شراء إضافي",
        "description": "استخدم المتوسط المرجح لحساب متوسط سعر الشراء الجديد وإجمالي الأسهم والمبلغ المستثمر دون الخلط بينه وبين اختيار الحصة الضريبية.",
        "answer": "أضف المبالغ التي أنفقت على الأسهم الحالية والجديدة، ثم قسمها على إجمالي عدد الأسهم. المتوسط ​​البسيط لسعرين لا يعمل إلا عندما تكون كميات الأسهم متساوية.",
        "sections": [
          {
            "heading": "وزن كل عملية شراء بكميتها",
            "paragraphs": [
              "متوسط سعر الشراء الجديد = (الكمية الموجودة × المتوسط الموجود + الكمية الجديدة × السعر الجديد) ÷ الكمية الإجمالية. يجب أن تستخدم الأسعار والكميات نفس وحدة المشاركة والعملة. يمكن استخدام الأسهم الكسرية عندما تعكس ممتلكاتك الفعلية.",
              "على سبيل المثال، تم شراء 100 سهم بسعر 50 دولارًا أمريكيًا و100 سهم آخر تم شراؤها بسعر 40 دولارًا أمريكيًا بتكلفة إجمالية قدرها 9000 دولار أمريكي. اقسم على 200 سهم لتحصل على 45 دولارًا. إذا كانت عملية الشراء الثانية عبارة عن 50 سهمًا فقط بسعر 40 دولارًا، يصبح المجموع 7000 دولار عبر 150 سهمًا، مما يعطي حوالي 46.67 دولارًا، وليس 45 دولارًا."
            ]
          },
          {
            "heading": "المتوسط الأقل لا يزيل الخسارة",
            "paragraphs": [
              "مباشرة بعد شراء 100 سهم إضافي بسعر 40 دولارًا، تبلغ القيمة السوقية لحيازة 200 سهم بقيمة 40 دولارًا للسهم الواحد 8000 دولار مقابل 9000 دولار تم إنفاقها. انخفض متوسط ​​السعر، ولكن لا يزال هناك فرق غير محقق قدره 1000 دولار، مما يؤدي إلى تعرض المزيد من الأموال للاستثمار.",
              "إن الانتقال من 40 دولارًا إلى متوسط ​​45 دولارًا سيكون بمثابة زيادة في السعر بنسبة 12.5٪ قبل الرسوم. هذه عملية حسابية، وليست توقعات أو سببًا للشراء. تؤدي زيادة المركز إلى تغيير المبلغ المعرض للخطر بالإضافة إلى متوسط ​​السعر."
            ],
            "table": {
              "headers": [
                "عقد",
                "أسهم",
                "المبلغ الذي تم إنفاقه"
              ],
              "rows": [
                [
                  "القائمة: 50 دولارًا للسهم",
                  "100",
                  "5000 دولار"
                ],
                [
                  "جديد: 40 دولارًا للسهم",
                  "100",
                  "4000 دولار"
                ],
                [
                  "المتوسط المشترك: 45 دولارًا",
                  "200",
                  "9000 دولار"
                ]
              ]
            }
          },
          {
            "heading": "احتفظ بمتوسطات الشراء منفصلة عن السجلات الضريبية",
            "paragraphs": [
              "تقوم الآلة الحاسبة بنموذج كتلتين من المشتريات وتستبعد رسوم الوساطة وأسعار الصرف والأرباح والمبيعات وإجراءات الشركات. قم بتحويل السجلات باستمرار قبل مقارنة المشتريات التي تمت بعملات مختلفة.",
              "إن متوسط ​​الاحتفاظ الحسابي ليس تحديدًا لأساس التكلفة الخاضعة للضريبة. تختلف قواعد الحصة الضريبية والأساليب المسموح بها حسب الولاية القضائية والأصول. احتفظ بسجلات المعاملات الأصلية للوسيط بدلاً من التعامل مع هذه النتيجة كتعليمات للإبلاغ الضريبي."
            ]
          }
        ],
        "faqs": [
          {
            "question": "هل يمكنني استخدامه عند الشراء بسعر أعلى؟",
            "answer": "نعم. تنطبق نفس صيغة المتوسط ​​المرجح. الشراء فوق المتوسط ​​الحالي يزيده؛ حجم التغيير يعتمد على الكمية الجديدة."
          },
          {
            "question": "لماذا يختلف متوسط ​​وسيطي؟",
            "answer": "قد يتم تضمين الرسوم أو تحويلات العملات أو التقريب أو إجراءات الشركات أو طريقة المحاسبة الخاصة بالوسيط في رقمها. تستخدم هذه الأداة فقط مدخلات السعر والكمية المعروضة."
          }
        ]
      },
      "compound": {
        "title": "الفائدة المركبة مع إيداع شهري: طريقة الحساب ومثال",
        "description": "فهم العوائد السنوية الفعالة ومساهمات نهاية الشهر والفرق بين الأموال المساهمة ونمو الاستثمار الافتراضي.",
        "answer": "تحويل العائد السنوي الفعلي إلى معدل شهري، وزيادة الرصيد الحالي، ثم إضافة مساهمة الشهر. احتفظ بالأموال المساهمة منفصلة عن النمو حتى لا يخطئ أي شخص في الإيداع الأكبر على أنه عائد أفضل.",
        "sections": [
          {
            "heading": "تحويل الافتراض السنوي باستمرار",
            "paragraphs": [
              "يتعامل Myeotiji مع العائد السنوي كمعدل سنوي فعال. المعدل الشهري هو (1 + المعدل السنوي)^(1/12) − 1. عند 5% سنويًا، يكون هذا المعدل الشهري حوالي 0.4074%، وليس بالضبط 5% ÷ 12. إن استخدام المعدل الاسمي المقتبس مقسومًا على 12 سيصف اتفاقية مركبة مختلفة.",
              "لكل شهر الرصيد الجديد = الرصيد السابق × (1 + المعدل الشهري) + المساهمة. تتم إضافة المساهمات في نهاية الشهر، وبالتالي فإن الإيداع الأول يحصل على عوائد في الأشهر اللاحقة وليس قبل أن يتم دفعه."
            ]
          },
          {
            "heading": "تحقق من مثال سنة واحدة عن طريق فصل الودائع",
            "paragraphs": [
              "ابدأ بمبلغ 1000 دولار، وساهم بمبلغ 100 دولار في نهاية كل شهر وافترض عائدًا سنويًا فعالاً ثابتًا بنسبة 5٪ لمدة عام واحد. يبدأ مبلغ 1000 دولار أمريكي بالزيادة إلى 1050 دولارًا أمريكيًا؛ تنمو الودائع الشهرية الاثني عشر إلى حوالي 1،227.26 دولارًا. المجموع هو حوالي 2،277.26 دولار.",
              "لقد قدمت 2200 دولار: 1000 دولار في البداية بالإضافة إلى اثني عشر وديعة بقيمة 100 دولار. أما المبلغ المتبقي البالغ 77.26 دولارًا تقريبًا فهو عبارة عن نمو نموذجي. مع عائد 0٪، يصبح الرصيد بالضبط 2200 دولار. تعتبر مقارنة العائد الصفري هذه مفيدة عند التحقق مما إذا كانت المدخلات منطقية."
            ],
            "table": {
              "headers": [
                "سيناريو سنة واحدة",
                "الأموال المقدمة",
                "الرصيد المقدر"
              ],
              "rows": [
                [
                  "0% عائد سنوي",
                  "2200 دولار",
                  "2,200.00 دولار"
                ],
                [
                  "عائد سنوي فعال 5%",
                  "2200 دولار",
                  "2,277.26 دولار"
                ]
              ]
            }
          },
          {
            "heading": "استخدم السيناريوهات بدلاً من النتيجة الموعودة",
            "paragraphs": [
              "قارن بين الافتراضات الدنيا والمتوسطة والعليا مع الحفاظ على ثبات الودائع. لا توفر الاستثمارات الحقيقية عائدًا شهريًا سلسًا، كما أن ترتيب المكاسب والخسائر مهم عند إضافة الأموال أو سحبها.",
              "والنتيجة لا تخصم الضرائب أو رسوم الاستثمار أو التضخم. إنه ليس عرض أسعار للودائع ولا توقعات لاستثمار معين. إذا ذكر البنك أو مقدم الخدمة سعرًا اسميًا، أو توقيتًا مختلفًا للمساهمة، أو جدولًا مركبًا مختلفًا، فقم بمواءمة تلك الاتفاقيات قبل مقارنة الرسم التوضيحي الخاص به بهذه الأداة."
            ]
          }
        ],
        "faqs": [
          {
            "question": "هل الاشتراكات الشهرية تتم في بداية الشهر أم في نهايته؟",
            "answer": "في نهاية كل شهر نموذجي. يمنح جدول بداية الشهر كل مساهمة شهرًا إضافيًا من النمو ويمكن أن ينتج عنه رصيد مختلف."
          },
          {
            "question": "هل النتيجة تشمل الضرائب أم التضخم؟",
            "answer": "لا، فالمخرجات عبارة عن توازن افتراضي قبل تلك التأثيرات. الرصيد الاسمي وقوته الشرائية المستقبلية كميات مختلفة."
          }
        ]
      },
      "unit-converter": {
        "title": "تحويل وحدات الطول والحرارة وتخزين البيانات",
        "description": "قم بتحويل القياسات الشائعة أثناء التحقق من الحجم الأمريكي مقابل الحجم الإمبراطوري، وإزاحات درجة الحرارة والوحدات العشرية مقابل وحدات التخزين الثنائية.",
        "answer": "قم بالتحويل من خلال وحدة أساسية مشتركة وتحقق من تعريف الوحدة أولاً. ويختلف الجالون الأمريكي عن الجالون الإمبراطوري، ويختلف الجيجابايت العشري عن الجيبيبايت. تحتاج درجة الحرارة أيضًا إلى إزاحة، وليس مجرد مضاعف.",
        "sections": [
          {
            "heading": "الطول والكتلة والمساحة والحجم تستخدم عوامل التحويل",
            "paragraphs": [
              "بالنسبة للوحدات ذات البعد نفسه، قم بتحويل كمية المصدر إلى وحدة أساسية وتقسيمها على عامل وحدة الوجهة. الميل الواحد يساوي 1.609344 كيلومترًا، لذا فإن 5 أميال تساوي 8.04672 كيلومترًا. لا تخلط بين عامل الطول وعامل المساحة: تتطلب الوحدات المربعة تحويلاً مربعًا.",
              "تستخدم قائمة الحجم بشكل واضح جالونات سائلة أمريكية وأكواب أمريكية. الجالون السائل الأمريكي هو 3.785411784 لترًا؛ إنه ليس الجالون الإمبراطوري الأكبر. قد يستخدم كوب الوصفة تقليدًا آخر، لذا تحقق من الوصفة أو وعاء القياس قبل وضع الرقم."
            ]
          },
          {
            "heading": "تعتبر درجة الحرارة والتخزين من الفخاخ الشائعة",
            "paragraphs": [
              "لتحويل درجة مئوية إلى فهرنهايت استخدم درجة فهرنهايت = درجة مئوية × 9/5 + 32. وللاستخدام العكسي درجة مئوية = (درجة فهرنهايت - 32) × 5/9. وهذا هو السبب في أن 100 درجة فهرنهايت تعادل حوالي 37.78 درجة مئوية وليس النتيجة التي يتم الحصول عليها بضرب 100 في 5/9 وحده.",
              "وحدات التخزين العشرية تستخدم صلاحيات 1000؛ تستخدم الوحدات الثنائية صلاحيات 1,024. هنا 1 جيجا بايت هو 1,000,000,000 بايت، بينما 1 جيجا بايت هو 1,073,741,824 بايت. هذه هي كميات البيانات، وليست سرعات الاتصال بالإنترنت أو أوقات نقل الملفات."
            ],
            "table": {
              "headers": [
                "الإدخال",
                "القيمة المحولة"
              ],
              "rows": [
                [
                  "1 ميل",
                  "1.609344 كم"
                ],
                [
                  "1 جالون سائل أمريكي",
                  "3.785411784 ل"
                ],
                [
                  "100 درجة فهرنهايت",
                  "37.777…درجة مئوية"
                ],
                [
                  "1 جيجا بايت",
                  "1,073,741,824 ب"
                ]
              ]
            }
          },
          {
            "heading": "حافظ على الدقة الكاملة حتى الخطوة الأخيرة",
            "paragraphs": [
              "اختر فئة، وأدخل قيمة وحدد وحدات المصدر والوجهة. تعرض الآلة الحاسبة ما يصل إلى ثمانية منازل عشرية، لذا قد تحتاج الكمية الصغيرة جدًا إلى وحدة وجهة أصغر لتظل قابلة للقراءة.",
              "قد يؤدي تقريب عامل التحويل قبل الضرب إلى تضخيم الخطأ. بالنسبة لأعمال التصنيع المسموح بها أو التقارير العلمية أو معيار الصناعة المحدد، تحقق من الدقة المطلوبة والتعريف الدقيق المستخدم في هذا السياق."
            ]
          }
        ],
        "faqs": [
          {
            "question": "هل يمكنني تحويل الجرام مباشرة إلى ملليلتر؟",
            "answer": "لا يخلو من كثافة المادة. غرام يقيس الكتلة والمليلتر يقيس الحجم. التحويل بينهما ليس عامل وحدة عالمية."
          },
          {
            "question": "هل يعني جالون القائمة جالونًا إمبراطوريًا بريطانيًا؟",
            "answer": "لا، القائمة تحمل علامة US gal وتستخدم الجالون السائل الأمريكي. استخدم التعريف الذي تتطلبه المادة المصدر الخاصة بك."
          }
        ]
      },
      "age": {
        "title": "حساب العمر: عيد الميلاد والسنوات المكتملة والأيام المنقضية",
        "description": "احسب سنوات العمر الكاملة، وميز بين العمر وفروقات السنة التقويمية، وافهم اصطلاحات التاريخ المحلي وأعياد الميلاد الكبيسة.",
        "answer": "اطرح سنة الميلاد من السنة المرجعية، ثم اطرح واحدة إذا لم يحدث عيد الميلاد بعد في تلك السنة. يستخدم Myeotiji تاريخ تقويم اليوم في متصفحك للتاريخ المرجعي.",
        "sections": [
          {
            "heading": "فارق السنة لا يعني دائمًا عمرًا مكتملًا",
            "paragraphs": [
              "الشخص الذي ولد في 31 ديسمبر 2000 يبلغ 25 عامًا في 30 ديسمبر 2026 ويبلغ 26 عامًا في 31 ديسمبر. إن طرح 2000 من 2026 في اليوم السابق من شأنه أن يبالغ في تقدير العمر الكامل بواحد.",
              "قارن الشهر أولاً ثم اليوم. إذا كان الشهر المرجعي أقدم من شهر الميلاد، فاطرح سنة واحدة. إذا كانت الأشهر متطابقة ولكن اليوم المرجعي سابق، فاطرح واحدًا أيضًا. وإلا احتفظ بفارق السنة."
            ]
          },
          {
            "heading": "فهم التاريخ الذي تستخدمه الآلة الحاسبة",
            "paragraphs": [
              "أدخل تاريخ الميلاد في حاسبة العمر. ويستخدم تاريخ التقويم المحلي الحالي من متصفحك، كما يُبلغ عن أيام التقويم المنقضية منذ الولادة. التواريخ المرجعية في جدول هذا الدليل عبارة عن رسوم توضيحية ثابتة؛ لا توفر الأداة المباشرة حقل تاريخ مرجعي منفصل.",
              "يمكن للمستخدمين في مناطق زمنية مختلفة رؤية أعمار مختلفة حوالي منتصف الليل في عيد ميلاد. يستخدم حساب الأيام حساب التاريخ فقط، بدلاً من وقت الميلاد المحدد. تاريخ الميلاد المستقبلي ليس إدخالاً صالحًا للعمر المكتمل."
            ],
            "table": {
              "headers": [
                "تاريخ الميلاد",
                "التاريخ المرجعي في المثال",
                "اكتمل العمر"
              ],
              "rows": [
                [
                  "2000-12-31",
                  "2026-12-30",
                  "25"
                ],
                [
                  "2000-12-31",
                  "2026-12-31",
                  "26"
                ],
                [
                  "2000-12-31",
                  "2027-01-01",
                  "26"
                ]
              ]
            }
          },
          {
            "heading": "تحتاج قواعد اليوم الكبيسة والأهلية الرسمية إلى الرعاية",
            "paragraphs": [
              "بالنسبة لعيد ميلاد 29 فبراير، تقوم هذه الأداة بمقارنة الشهر واليوم مباشرة. وفي السنة غير الكبيسة، يزداد عدد السنوات الكاملة في الأول من مارس. وهذا هو تقليد محدد للآلة الحاسبة، وليس حكمًا بشأن السن القانوني في كل ولاية قضائية.",
              "قد يستخدم القبول أو المزايا أو عقد التأمين أو أي إجراء رسمي آخر عمرًا في تاريخ محدد أو قاعدة خاصة لعيد الميلاد. تحقق من تعريف تلك العملية. لا يمكن أن تحل نتيجة العصر الحالي اليومية محل تقييم الأهلية."
            ]
          }
        ],
        "faqs": [
          {
            "question": "لماذا يمكن أن تختلف النتيجة عن السنة المعروضة في التقويم؟",
            "answer": "يتجاهل طرح سنة التقويم ما إذا كان عيد الميلاد قد حدث أم لا. العمر المكتمل يحسب أعياد الميلاد التي تم الوصول إليها بالفعل بموجب اتفاقية التاريخ المعلنة."
          },
          {
            "question": "هل يمكنني استخدام الأيام المنقضية مقسومة على 365 بدلاً من ذلك؟",
            "answer": "ليس لعمر سنة كاملة بالضبط. السنوات الكبيسة وموضع عيد الميلاد يجعلان هذا الاختصار غير موثوق به فيما يتعلق بالحدود العمرية."
          }
        ]
      }
    },
    "legalLabels": {
      "privacy": "الخصوصية وملفات تعريف الارتباط",
      "terms": "الاستخدام والقيود",
      "contact": "الاتصال والتصحيحات",
      "notice": "تقديرات للمعلومات العامة. لا تقدم هذه الخدمة مشورة ضريبية أو قانونية أو كشوف مرتبات أو استثمارية فردية أو إعداد عوائد أو تمثيلك. تحقق من السنة والموقع والاستثناءات المذكورة قبل الاعتماد على النتيجة.",
      "tracking": "تحليل Google Analytics مفعّل افتراضياً ويمكن إيقافه أسفل الصفحة. لا تُرسل مدخلات الحاسبات. تم توصيل AdSense لطلب إعلانات غير مخصصة. قد تستخدم Google وشركاؤها ملفات تعريف الارتباط وإشارات الويب وعناوين IP والمعرّفات لتقديم الإعلانات وقياسها. الإعلانات غير المخصصة قد تستخدم ملفات تعريف الارتباط أيضاً. يعتمد العرض على الموافقة على الموقع وإعدادات الحساب ومتطلبات الموافقة المعمول بها. تبقى الصفحات الصينية دون تحليل أو إعلانات."
    },
    "legal": {
      "privacy": [
        [
          "النطاق والمشغل",
          "تُدار خدمة Myeotiji من كوريا الجنوبية. ينطبق هذا الإشعار على الصفحات العربية. للتواصل: contact@myeotiji.kr. قد تختلف الإعدادات في الصفحات بلغات أخرى."
        ],
        [
          "مدخلات الآلة الحاسبة",
          "يتم تشغيل الحسابات في المتصفح الخاص بك. لا يرسل هذا الإصدار مبالغ الآلة الحاسبة أو الرواتب أو التواريخ أو النتائج إلى قاعدة بيانات المشغل أو خدمة التحليلات. لا تضع بيانات شخصية في عناوين URL أو ترسل إلينا مستندات الهوية أو تفاصيل الحساب أو سجلات الرواتب."
        ],
        [
          "التحليلات والإعلانات وملفات تعريف الارتباط",
          "تحليل Google Analytics مفعّل افتراضياً ويمكن إيقافه أسفل الصفحة. لا تُرسل مدخلات الحاسبات. تم توصيل AdSense لطلب إعلانات غير مخصصة. قد تستخدم Google وشركاؤها ملفات تعريف الارتباط وإشارات الويب وعناوين IP والمعرّفات لتقديم الإعلانات وقياسها. الإعلانات غير المخصصة قد تستخدم ملفات تعريف الارتباط أيضاً. يعتمد العرض على الموافقة على الموقع وإعدادات الحساب ومتطلبات الموافقة المعمول بها. تبقى الصفحات الصينية دون تحليل أو إعلانات."
        ],
        [
          "الاستضافة اللازمة والمعالجة في الخارج",
          "تقوم شركة Vercel بتسليم هذا الموقع وحمايته. تعرض الطلبات بالضرورة معلومات الاتصال مثل عنوان IP وعنوان URL المطلوب والوقت ورؤوس الجهاز/المتصفح وإشارات الأمان للبنية التحتية للاستضافة. قد تتم معالجة هذه المعلومات خارج بلدك، بما في ذلك الولايات المتحدة أو مواقع البنية التحتية الأخرى. لا يؤدي تعطيل التحليلات إلى إزالة هذه المعالجة. نحن نستخدمها للتسليم والأمن والتحقيق في الأخطاء، وليس الملفات التعريفية الإعلانية."
        ],
        [
          "الاحتفاظ واختياراتك",
          "لا نحتفظ بمدخلات الآلة الحاسبة كسجلات للخادم. تتبع سجلات الاستضافة الاحتفاظ بالموفر وإعدادات المشروع المعمول بها؛ لم نتحقق من فترة احتفاظ ثابتة واحدة لجميع سجلات البنية التحتية. اتصل بنا للحصول على التفاصيل المعمول بها أو لطلب الوصول أو التصحيح أو الحذف أو التقييد حيثما كان ذلك متاحًا بموجب القانون الخاص بك. نحن نقوم بتقييم الطلبات والاستثناءات القانونية، ولا نعد بإمكانية حذف جميع سجلات الموفر على الفور. يؤدي إغلاق الصفحة إلى مسح حالة الحساب في الذاكرة الخاصة بها؛ قد يحتفظ متصفحك بالسجل أو يستعيد علامة تبويب."
        ],
        [
          "البريد الإلكتروني والروابط الخارجية",
          "إذا اخترت مراسلتنا عبر البريد الإلكتروني، فإننا نتلقى عنوانك ورسالتك للتعامل مع الطلب ونحتفظ فقط بما هو مطلوب لهذا الغرض أو الالتزامات القانونية. استخدم أمثلة خيالية، وليس السجلات المالية الشخصية الفعلية. البريد الإلكتروني غير مطلوب لحساب. تفتح المراجع الرسمية مواقع الطرف الثالث بسياساتها الخاصة. تتطلب التغييرات في التتبع أو استخدام البيانات تحديث هذا الإشعار وتنفيذ أي خيارات مطلوبة قانونًا قبل التنشيط."
        ]
      ],
      "terms": [
        [
          "الغرض",
          "شرح حسابي وعامة مجاني للخدمة الذاتية. نحن لا نعتبر أنفسنا محاميك، أو محاسبك، أو معد الضرائب، أو مزود كشوف المرتبات، أو مستشار الاستثمار، أو وكالة حكومية. لا يتم إنشاء أي علاقة بين العميل والمحترف بمجرد استخدام الآلة الحاسبة."
        ],
        [
          "التحقق من الافتراضات",
          "النتائج هي تقديرات للسنة المذكورة، والاختصاص والنموذج. الحالة الضريبية، والإعفاءات، ووثائق الخطة، والقواعد المحلية، والتقريب وتغيير القانون يمكن أن تغير النتائج الفعلية. المثال ليس ضمانا. تحقق مع الخدمة الرسمية ذات الصلة أو المحترف المؤهل قبل التقديم أو دفع الأجور أو الاستثمار أو التبرع أو حجز السفر."
        ],
        [
          "حدود محددة",
          "يستخدم العمل الإضافي في الولايات المتحدة خط الأساس الفيدرالي المغطى وغير المعفي، وليس جميع قواعد الولاية. إن الأجر المستحق هو رسم توضيحي سنوي مبسط، وليس حساب W-4 أو حساب الإيداع. إن مطابقة 401 (ك) ليست رصيدًا مكتسبًا أو توصية مساهمة. متوسط ​​المخزون والأدوات المركبة لا توصي بالأوراق المالية أو تضمن العوائد. لا تحدد أدوات التاريخ والعمر الأهلية القانونية أو المواعيد النهائية."
        ],
        [
          "الأخطاء والمسؤولية",
          "قم بالإبلاغ عن خطأ مشتبه به باستخدام مدخلات وهمية وعنوان URL المتأثر. يجوز لنا تصحيح أداة متأثرة أو التحذير منها أو تقييدها مؤقتًا عندما لا يمكن التحقق من افتراضاتها. يصف هذا الإشعار النطاق؛ ولا يستبعد المسؤولية التي لا يمكن استبعادها قانونًا، بما في ذلك المسؤولية المطبقة عن سوء السلوك المتعمد أو الإهمال الجسيم، أو إزالة حقوق المستهلك الإلزامية."
        ],
        [
          "الدعم والتغييرات",
          "يعالج الدعم الأخطاء الفنية وتصحيحات المصدر العامة. لا تطلب مناصب ضريبية فردية أو قرارات قانونية أو إعداد إيداع أو تمثيل. سنقوم بتوجيه هذه الطلبات إلى السلطة المختصة أو أحد المتخصصين المؤهلين. تنعكس التغييرات المادية في تاريخ الصفحة؛ إعادة التحقق من الافتراضات في كل مرة."
        ]
      ],
      "contact": [
        [
          "المشكلات الفنية والتصحيحات وطلبات الخصوصية",
          "أرسل بريدًا إلكترونيًا إلى contact@myeotiji.kr مع عنوان URL للصفحة والسنة/المنطقة المعمول بها ومثال خيالي يوضح النتيجة المتوقعة والمعروضة. يمكنك أيضًا طلب معلومات حول معالجة البيانات أو ممارسة حقوق الخصوصية المعمول بها هنا. نحن لا نحتاج إلى حساب أو نموذج."
        ],
        [
          "حافظ على معلوماتك آمنة",
          "لا ترسل عبر البريد الإلكتروني المعرفات الحكومية أو الحسابات المصرفية أو كلمات المرور أو كشوف المرتبات الكاملة أو المستندات الضريبية الفعلية. نحن لا نقدم استشارات ضريبية أو قانونية أو استثمارية شخصية أو نتصرف نيابة عنك. بالنسبة لتقديم الملفات أو الدفع أو الموعد النهائي للتوظيف، اتصل بالسلطة المختصة أو المهني المؤهل مباشرة."
        ]
      ]
    },
    "policy": [
      {
        "heading": "الغرض والتأليف",
        "text": "تقوم شركة Myeotiji بنشر شروحات للآلات الحاسبة المتوفرة على هذا الموقع. تم إعداد هذه الأدلة بمساعدة الذكاء الاصطناعي ومقارنتها بطريقة الحساب المذكورة والأمثلة العملية والمراجع المستشهد بها. يحدد اسم المؤلف Myeotiji كخدمة النشر؛ ولا تطالب بالمراجعة من قبل محاسب أو محام أو مستشار منظم."
      },
      {
        "heading": "المصادر والتواريخ والقواعد المعمول بها",
        "text": "بالنسبة لموضوعات القانون والضرائب والرواتب والتأمينات الاجتماعية، نفضل منشورات الهيئة العامة المسؤولة وربطها بالوثائق ذات الصلة. يتم تحديد شروط المزود والمعايير الفنية على هذا النحو. المثال الرياضي الذي كتبه ميوتيجي هو مثال توضيحي، وليس اقتباسًا من مرجع ما. يسجل تاريخ التحديث المرئي مراجعة محتوى المادة، وليس التحديث اليومي التلقائي. البلد والسنة والاستثناءات المذكورة في كل أمر دليلي."
      },
      {
        "heading": "ما يمكن أن يحدده الحساب وما لا يمكن أن يحدده",
        "text": "نتحقق من الأمثلة العددية التمثيلية وشروط الحدود. لا تزال النماذج البسيطة تتجاهل الحقائق التي قد تغير الدفع أو الاستحقاق الفعلي. إن نمو الاستثمار الافتراضي ليس عائدا موعودا، وتقدير الرواتب ليس تقييما ضريبيا نهائيا. تستخدم الأمثلة الافتراضات الموضحة؛ يجب على القراء التحقق من سجلات المزود أو صاحب العمل أو السلطة الفعلية قبل الاعتماد على الرقم لاتخاذ قرار لاحق."
      },
      {
        "heading": "التصحيحات وردود الفعل",
        "text": "إذا وجدت صيغة أو مصدر أو ترجمة أو مثال غير صحيح، فيرجى إرسال عنوان الصفحة والمدخلات ذات الصلة والنتيجة التي تتوقعها إلى عنوان الاتصال الخاص بنا. لا ترسل وثائق الهوية أو بيانات الراتب الكامل أو أرقام الحسابات أو غيرها من المعلومات الشخصية غير الضرورية. يمكننا استخدام مثال قابل للتكرار للتحقيق في الشرح وتحديثه."
      }
    ]
  },
  "bn": {
    "labels": {
      "home": "ক্যালকুলেটর",
      "guides": "গণনার নির্দেশিকা",
      "policy": "কিভাবে আমরা এই গাইড প্রস্তুত",
      "title": "গণনার নির্দেশিকা: সূত্র এবং কাজের উদাহরণ",
      "description": "তারিখ, টাকা এবং দৈনন্দিন সিদ্ধান্তের জন্য ব্যবহারিক গণনা। একটি ক্যালকুলেটর চয়ন করুন এবং উত্তরের পিছনে সূত্রটি দেখুন।",
      "intro": "আপনি যে প্রশ্নটির উত্তর দিতে চান তা দিয়ে শুরু করুন। প্রতিটি গাইড পদ্ধতিটি ব্যাখ্যা করে, সংখ্যার মাধ্যমে কাজ করে এবং একটি ক্যালকুলেটরের লিঙ্ক যা আপনি নিজের ইনপুট দিয়ে ব্যবহার করতে পারেন।",
      "global": "টাকা, তারিখ এবং দৈনন্দিন গণনা",
      "country": "মার্কিন যুক্তরাষ্ট্র: বেতন, কর এবং অবসর",
      "quick": "দ্রুত উত্তর",
      "contents": "এই পৃষ্ঠায়",
      "try": "ক্যালকুলেটর চেষ্টা করুন",
      "related": "সম্পর্কিত গাইড",
      "questions": "সাধারণ প্রশ্ন",
      "references": "সূত্র এবং আরও পড়া",
      "updated": "আপডেট করা হয়েছে",
      "author": "মিয়োটিজি প্রস্তুত করেছেন",
      "exampleNote": "উদাহরণগুলি বর্ণিত অনুমানগুলিকে ব্যাখ্যা করে৷ প্রকৃত ফি, রিটার্ন এবং বেতনের পরিমাণ ভিন্ন হতে পারে।",
      "policyTitle": "Myeotiji গণনা নির্দেশিকা: উত্স এবং সম্পাদকীয় পদ্ধতি",
      "policyDescription": "মিয়োটিজি কীভাবে গণনা ব্যাখ্যা করেন, উদাহরণগুলি পরীক্ষা করেন, উত্স উদ্ধৃত করেন এবং সংশোধন এবং অনুমান পরিচালনা করেন।",
      "calculatorLink": "সূত্র দেখুন, একটি কার্যকর উদাহরণ এবং সাধারণ ভুল →",
      "homeTitle": "বিনামূল্যে আর্থিক এবং দৈনন্দিন ক্যালকুলেটর | মিয়োটিজি",
      "homeHeading": "টাকা, কাজ এবং দৈনন্দিন জীবনের জন্য বিনামূল্যে ক্যালকুলেটর",
      "homeDescription": "তারিখ, টাকা এবং দৈনন্দিন সিদ্ধান্তের জন্য ব্যবহারিক গণনা। একটি ক্যালকুলেটর চয়ন করুন এবং উত্তরের পিছনে সূত্রটি দেখুন।"
    },
    "guides": {
      "fee": {
        "title": "লেনদেনের ফি হিসাব: নির্দিষ্ট নিট টাকা পেতে কত নিতে হবে?",
        "description": "শতাংশ এবং নির্দিষ্ট ফি এর পরে নেট আয়ের কাজ করুন, তারপর একটি টার্গেট পেআউটের জন্য প্রয়োজনীয় চার্জ খুঁজে পেতে সূত্রটি বিপরীত করুন।",
        "answer": "চার্জ থেকে শতাংশ ফি এবং নির্দিষ্ট ফি উভয়ই বিয়োগ করুন। ফি-র পরে একটি নির্দিষ্ট পরিমাণ পেতে, লক্ষ্য এবং নির্দিষ্ট ফিকে শতাংশ হার থেকে এক বিয়োগ করে ভাগ করুন।",
        "sections": [
          {
            "heading": "ফি এর দুটি অংশ আলাদা করুন",
            "paragraphs": [
              "একটি শতাংশ ফি সংগৃহীত পরিমাণ সঙ্গে বৃদ্ধি; একটি নির্দিষ্ট লেনদেন ফি না. গুণ করার আগে দশমিক হিসাবে শতাংশ লিখুন। একটি অনুমানমূলক 3% ফি এর জন্য, 0.03 ব্যবহার করুন। একটি 0.30 নির্দিষ্ট ফি মানে আপনার নির্বাচিত মুদ্রায় 30 সেন্ট, অন্য শতাংশ নয়।",
              "নেট আয় = চার্জ × (1 − হার) − নির্দিষ্ট ফি। প্রদানকারী তার হার কত পরিমাণে প্রযোজ্য তা পরীক্ষা করুন: শিপিং, ট্যাক্স, মুদ্রা রূপান্তর এবং ক্রস-বর্ডার চার্জের আলাদা চিকিত্সা থাকতে পারে। এই নির্দেশিকা পাটিগণিত বর্ণনা করে, কোনো প্রদানকারীর বর্তমান শুল্ক নয়।",
              "নিট প্রাপ্তি = আদায়ের পরিমাণ × (1 − ফি-এর হার) − নির্দিষ্ট ফি। প্রয়োজনীয় আদায় = (কাঙ্ক্ষিত নিট টাকা + নির্দিষ্ট ফি) ÷ (1 − ফি-এর হার)।"
            ]
          },
          {
            "heading": "একটি কার্যকর উদাহরণ: কেন 3% যোগ করা যথেষ্ট নয়",
            "paragraphs": [
              "ধরুন আপনি $100 সংগ্রহ করেছেন এবং অনুমানমূলক ফি হল 3% প্লাস $0.30। শতাংশ অংশ হল $3; নির্দিষ্ট অংশ যোগ করলে একটি $3.30 ফি এবং $96.70 নেট আয় পাওয়া যায়।",
              "$100 নেট পেতে, চার্জ সমাধান করুন × 0.97 − 0.30 = 100৷ প্রয়োজনীয় অগোলাকৃতি চার্জ হল 100.30 ÷ 0.97, প্রায় $103.4021৷ $100 এর সাথে 3% যোগ করলে $103 পাওয়া যায়, যার নেট মাত্র $99.61। পার্থক্য দেখা দেয় কারণ প্রদানকারী বর্ধিত চার্জের উপরও একটি ফি নেয়।"
            ],
            "table": {
              "headers": [
                "চার্জ",
                "হাইপোথেটিকাল ফি",
                "নেট"
              ],
              "rows": [
                [
                  "$100.00",
                  "$3.30",
                  "$96.70"
                ],
                [
                  "$103.00",
                  "$3.39",
                  "$99.61"
                ],
                [
                  "$103.40",
                  "রাউন্ডিংয়ের আগে $3.402",
                  "রাউন্ডিংয়ের আগে $99.998"
                ]
              ]
            }
          },
          {
            "heading": "একটি মূল্য চেক হিসাবে ফলাফল ব্যবহার করুন",
            "paragraphs": [
              "একটি ফরোয়ার্ড গণনার জন্য সংগৃহীত পরিমাণ লিখুন, অথবা একটি বিপরীত গণনার জন্য লক্ষ্য-নেট মোড নির্বাচন করুন। নির্বাচিত মুদ্রা আপনার নির্দিষ্ট ফি এর সাথে সামঞ্জস্যপূর্ণ রাখুন। মুদ্রা নির্বাচন বিন্যাস পরিবর্তন; এটি একটি বিনিময় হার রূপান্তর সঞ্চালন না.",
              "স্ক্রীনটি প্রদর্শনের জন্য ফলাফলকে বৃত্তাকার করে। যদি একটি ন্যূনতম অর্থপ্রদান অবশ্যই ঠিক পূরণ করতে হয়, তাহলে পরবর্তী ক্ষুদ্রতম মুদ্রা বৃদ্ধি এবং আপনার প্রদানকারীর রাউন্ডিং নিয়মগুলি পরীক্ষা করুন৷ রিফান্ড, ন্যূনতম ফি, ফি এর উপর ট্যাক্স এবং সারচার্জ অনুমোদিত কিনা আলাদা চেকের প্রয়োজন।"
            ]
          }
        ],
        "faqs": [
          {
            "question": "0% ফি সবসময় মানে আমি পুরো চার্জ গ্রহণ করি?",
            "answer": "শুধুমাত্র যদি নির্দিষ্ট ফিও শূন্য হয় এবং অন্য কোন ছাড় প্রযোজ্য হবে না। একটি 0% শতাংশ ফি এবং $0.30 ফিক্সড ফি এখনও $100 চার্জ থেকে $99.70 ছাড়ে৷"
          },
          {
            "question": "আমি কি বিভিন্ন পেমেন্ট প্রদানকারীর তুলনা করতে পারি?",
            "answer": "হ্যাঁ, একই চার্জ ব্যবহার করে প্রতিটি প্রদানকারীর প্রকাশিত হার এবং নির্দিষ্ট ফি লিখুন। যেকোন অতিরিক্ত চার্জ এবং আপনার অ্যাকাউন্টে প্রযোজ্য শর্তাবলীর সাথে ফলাফলের তুলনা করুন।"
          }
        ]
      },
      "discount": {
        "title": "২০% তারপর ১০% ছাড়: মোট ছাড় কেন ২৮%?",
        "description": "ক্রমাগত ডিসকাউন্ট গণনা করুন, কুপন সংমিশ্রণ তুলনা করুন এবং সংরক্ষিত পরিমাণ থেকে চূড়ান্ত-মূল্য শতাংশকে আলাদা করুন।",
        "answer": "ইতিমধ্যে হ্রাসকৃত মূল্যে দ্বিতীয় ছাড় প্রয়োগ করুন। 20% ছাড়ের পরে 10% ছাড় দিলে মূল মূল্যের 80% × 90% = 72% হয়, তাই মোট সঞ্চয় হল 28%।",
        "sections": [
          {
            "heading": "আপনি যে মূল্য দিতে থাকেন তা গুণ করুন",
            "paragraphs": [
              "প্রতিটি শতাংশ ছাড়ের জন্য, একটি থেকে দশমিক হার বিয়োগ করুন। অবশিষ্ট ভগ্নাংশ দ্বারা মূল মূল্য গুণ করুন. দুটি ছাড় সহ, চূড়ান্ত মূল্য = আসল × (1 − প্রথম হার) × (1 − দ্বিতীয় হার)। কার্যকর ডিসকাউন্ট = 1 − চূড়ান্ত মূল্য ÷ আসল মূল্য।",
              "হার যোগ করলে উভয় ডিসকাউন্টকে এমনভাবে বিবেচনা করা হবে যেন তারা আসল মূল্যে প্রয়োগ করেছে। এটি একটি ভিন্ন অফার। একটি দোকান একটি একক 30% হ্রাসের প্রতিশ্রুতি দেয়, অন্যান্য শর্তাদি বিবেচনা করার আগে ক্রমাগত 20% এবং 10% হ্রাসের তুলনায় একটি বড় শতাংশ হ্রাস প্রদান করে।"
            ]
          },
          {
            "heading": "একটি $100 আইটেমে দুটি অফার তুলনা করুন",
            "paragraphs": [
              "প্রথম 20% হ্রাসের পরে আইটেমটির দাম $80। দ্বিতীয় 10% হ্রাস $8 সরিয়ে দেয়, $72 ছেড়ে দেয়। মোট সঞ্চয় হল $28। দুটি বিশুদ্ধ শতাংশ ডিসকাউন্টের ক্রমকে বিপরীত করলে একই গাণিতিক ফলাফল পাওয়া যায়, কারণ অবশিষ্ট-মূল্য গুণনীয়কগুলি গুণিত হয়।",
              "সেই অর্ডার নিয়মটি স্বয়ংক্রিয়ভাবে একটি নির্দিষ্ট-মানের কুপনে প্রসারিত হয় না। একটি $10 কুপন $100 আইটেম $70 দেয়। প্রথমে $10 ছাড় নিলে এবং তারপর 20% প্রয়োগ করলে $72 পাওয়া যায়। ন্যূনতম খরচ, ক্যাপ এবং বাদ দেওয়া পণ্যগুলি পরিবর্তন করতে পারে কোন অফারটি আসলে ব্যবহার করা যেতে পারে।"
            ],
            "table": {
              "headers": [
                "অফার",
                "চূড়ান্ত মূল্য",
                "সংরক্ষণ"
              ],
              "rows": [
                [
                  "20%, তারপর 10%",
                  "$72",
                  "28%"
                ],
                [
                  "একটি 30% ছাড়",
                  "$70",
                  "30%"
                ],
                [
                  "20%, তারপর একটি $10 কুপন",
                  "$70",
                  "$30"
                ]
              ]
            }
          },
          {
            "heading": "বিজ্ঞাপিত হ্রাস লিখুন, অবশিষ্ট মূল্য নয়",
            "paragraphs": [
              "ক্যালকুলেটরের ক্ষেত্রগুলি ছাড় শতাংশ নেয়। একটি লেবেল বলছে যে মূল মূল্যের 80% অর্থ প্রদানের অর্থ হল 20% ছাড়৷ 80 লিখলে পরিবর্তে 80% হ্রাস গণনা করা হবে।",
              "টুলটি পরপর দুটি শতাংশ হ্রাসের মডেল। এটি বিক্রয় কর, বিতরণ, নগদ-ব্যাক বা নির্দিষ্ট কুপন যোগ করে না। সেই আইটেমগুলি ভিন্ন হলে চেকআউটের মোট সংখ্যার তুলনা করুন এবং প্রতিটি ধাপে বিক্রেতার প্রকৃত রাউন্ডিংয়ের জন্য অনুমতি দিন।"
            ]
          }
        ],
        "faqs": [
          {
            "question": "50% ছাড়ের পরে 50% ছাড় কি বিনামূল্যে?",
            "answer": "না। প্রথম কমানোর পর অর্ধেক আসল দাম থেকে যায় এবং দ্বিতীয়টির পরেও অর্ধেক থাকে। আপনি মূল মূল্যের 25% প্রদান করেন, একটি 75% সঞ্চয়।"
          },
          {
            "question": "কেন আমার রসিদে সঞ্চয় সামান্য ভিন্ন?",
            "answer": "একজন খুচরা বিক্রেতা প্রতিটি আইটেম বা প্রতিটি ডিসকাউন্টকে আলাদাভাবে রাউন্ড করতে পারে, বা বিভিন্ন যোগ্য পরিমাণে ডিসকাউন্ট প্রয়োগ করতে পারে। এই ক্যালকুলেটর একটি বৃত্তাকার ফলাফল প্রদর্শন করার আগে দুটি বিবৃত শতাংশ ব্যবহার করে।"
          }
        ]
      },
      "days": {
        "title": "দুই তারিখের ব্যবধান: প্রথম দিন ও অধিবর্ষ কীভাবে গণনা করবেন",
        "description": "অতিবাহিত দিনগুলি বনাম অন্তর্ভুক্ত তারিখ গণনা, লিপ ডে, উইকএন্ড এবং কেন একটি ক্যালেন্ডার-ডে টুল একটি সময়সীমা ক্যালকুলেটর থেকে আলাদা তা বুঝুন।",
        "answer": "অতিবাহিত ক্যালেন্ডার দিনের জন্য, শেষ তারিখ থেকে শুরুর তারিখ বিয়োগ করুন। যদি শুরুর দিনটি 1 দিন হয়, একটি ফরোয়ার্ড তারিখ পরিসরের জন্য একটি যোগ করুন। জানুয়ারী 1 থেকে 11 জানুয়ারী হল 10 অতিবাহিত দিন বা 11 দিন সহ।",
        "sections": [
          {
            "heading": "প্রথমে গণনা কনভেনশন বেছে নিন",
            "paragraphs": [
              "সোমবার থেকে মঙ্গলবার এক রাতের অবস্থান কিন্তু দুটি ক্যালেন্ডার তারিখ স্পর্শ করে। উভয় সংখ্যাই সঠিক হতে পারে কারণ তারা বিভিন্ন প্রশ্নের উত্তর দেয়। ফলাফলের তুলনা করার আগে আপনি অতিবাহিত দিন বা একটি নির্দিষ্ট সময়ের মধ্যে অন্তর্ভুক্ত তারিখের সংখ্যা চান কিনা তা নির্ধারণ করুন।",
              "একটি আরোহী পরিসরের জন্য ক্যালকুলেটরের অন্তর্ভুক্ত-শুরু বিকল্পটি একদিন যোগ করে। একই শুরু এবং শেষ তারিখ তাই শূন্য অতিবাহিত দিন বা একটি অন্তর্ভুক্ত দিন দেয়। শুরুর তারিখের আগে একটি শেষ তারিখ একটি নেতিবাচক ব্যবধান দেয়; আপনি যখন একটি স্বাভাবিক ফরোয়ার্ড পিরিয়ড চান তখন তারিখগুলি বিপরীত করুন।"
            ]
          },
          {
            "heading": "একটি লিপ-বছরের উদাহরণ দিয়ে কাজ করুন",
            "paragraphs": [
              "2028 সালে, 28 ফেব্রুয়ারী থেকে 1 মার্চ পর্যন্ত দুটি অতিবাহিত দিন ব্যপ্ত হয় কারণ 29 ফেব্রুয়ারি তাদের মধ্যে পড়ে। ইনক্লুসিভ গণনা তিনটি ক্যালেন্ডার তারিখ দেয়: 28 ফেব্রুয়ারি, 29 ফেব্রুয়ারি এবং 1 মার্চ। 2027 সালে, 28 ফেব্রুয়ারি থেকে মার্চ 1 শুধুমাত্র একটি অতিবাহিত দিন জুড়ে থাকে।",
              "টুলটি বিয়োগের জন্য UTC-তে প্রবেশ করা ক্যালেন্ডার তারিখগুলিকে স্বাভাবিক করে। এটি একটি দিবালোক-সংরক্ষণ ঘড়ির পরিবর্তনকে একটি সাধারণ ক্যালেন্ডার-দিনের ব্যবধানকে একটি ভগ্নাংশ দিনে পরিণত করতে বাধা দেয়। এটি ফ্লাইটের সময়কাল বা সময়-জোন-নির্দিষ্ট টাইমস্ট্যাম্পের মধ্যে সঠিক ঘন্টার জন্য একটি ক্যালকুলেটর নয়।"
            ],
            "table": {
              "headers": [
                "তারিখগুলি",
                "অতিবাহিত",
                "শুরু সহ"
              ],
              "rows": [
                [
                  "জানুয়ারী 1 → জানুয়ারী 11",
                  "10 দিন",
                  "11 দিন"
                ],
                [
                  "একই তারিখ",
                  "0 দিন",
                  "1 দিন"
                ],
                [
                  "ফেব্রুয়ারী 28 → মার্চ 1, 2028",
                  "2 দিন",
                  "3 দিন"
                ]
              ]
            }
          },
          {
            "heading": "ক্যালেন্ডার দিন মানে ব্যবসার দিন নয়",
            "paragraphs": [
              "শনিবার, রবিবার এবং সরকারী ছুটির দিনগুলি ক্যালেন্ডার দিন হিসাবে গণনা করা হয়। ছুটির পরিকল্পনার জন্য, একটি ক্যালকুলেটর ব্যবহার করুন যা প্রাসঙ্গিক দেশের ছুটির দিন এবং বিকল্প কর্মদিবস জানে। শুধুমাত্র তারিখের পার্থক্য আপনার কত বেতনের ছুটির দিন প্রয়োজন তা নির্ধারণ করতে পারে না।",
              "চুক্তি এবং অফিসিয়াল সময়সীমা প্রথম দিন, দিনের শেষের কাটঅফ এবং ছুটির এক্সটেনশনকে ভিন্নভাবে সংজ্ঞায়িত করতে পারে। একটি মিস ডেডলাইন গুরুত্বপূর্ণ যখন গভর্নিং নিয়ম চেক করুন. প্রতিদিনের কাউন্টডাউন এবং বার্ষিকীগুলির জন্য, ফলাফলের পাশাপাশি আপনার গণনা সম্মেলনটি বলুন।"
            ]
          }
        ],
        "faqs": [
          {
            "question": "আমি প্রথম দিন অন্তর্ভুক্ত করা উচিত?",
            "answer": "যখন সেই তারিখটি পিরিয়ডের 1 দিন হিসাবে গণনা করা হয় তখন এটি অন্তর্ভুক্ত করুন। তারিখের মধ্যে অতিবাহিত ব্যবধান পরিমাপ করার সময় এটি বাদ দিন। একটি চুক্তি বা কর্তৃপক্ষের একটি নিয়ম একটি সাধারণ ক্যালেন্ডার কনভেনশনের উপর অগ্রাধিকার নেয়।"
          },
          {
            "question": "30 দিন কি সবসময় এক মাসের সমান?",
            "answer": "না। ক্যালেন্ডার মাসের বিভিন্ন দৈর্ঘ্য আছে। প্রতি মাসে 30 দিনে রূপান্তর করার পরিবর্তে প্রকৃত শুরু এবং শেষ তারিখগুলি ব্যবহার করুন৷"
          }
        ]
      },
      "stock-average": {
        "title": "নতুন শেয়ার কেনার পর ভারিত গড় ক্রয়মূল্য কীভাবে বের করবেন",
        "description": "ট্যাক্স-লট নির্বাচনের সাথে বিভ্রান্ত না করে একটি নতুন গড় ক্রয় মূল্য, মোট শেয়ার এবং বিনিয়োগকৃত পরিমাণ গণনা করতে একটি ওজনযুক্ত গড় ব্যবহার করুন।",
        "answer": "বিদ্যমান এবং নতুন শেয়ারে ব্যয় করা পরিমাণ যোগ করুন, তারপর শেয়ারের মোট সংখ্যা দিয়ে ভাগ করুন। দুটি মূল্যের সাধারণ গড় শুধুমাত্র তখনই কাজ করে যখন শেয়ারের পরিমাণ সমান হয়।",
        "sections": [
          {
            "heading": "প্রতিটি ক্রয়ের পরিমাণ অনুযায়ী ওজন করুন",
            "paragraphs": [
              "নতুন গড় ক্রয় মূল্য = (বিদ্যমান পরিমাণ × বিদ্যমান গড় + নতুন পরিমাণ × নতুন মূল্য) ÷ মোট পরিমাণ। মূল্য এবং পরিমাণ একই শেয়ার ইউনিট এবং মুদ্রা ব্যবহার করা আবশ্যক. ভগ্নাংশ শেয়ার ব্যবহার করা যেতে পারে যখন তারা আপনার প্রকৃত হোল্ডিং প্রতিফলিত করে।",
              "উদাহরণস্বরূপ, 100টি শেয়ার 50 ডলারে কেনা হয়েছে এবং অন্য 100টি শেয়ার 40 ডলারে কেনা হয়েছে মোট $9,000। $45 পেতে 200 শেয়ার দিয়ে ভাগ করুন। যদি দ্বিতীয় ক্রয়টি $40 এ মাত্র 50টি শেয়ার হয়, তাহলে 150টি শেয়ার জুড়ে মোট $7,000 হয়ে যায়, যা প্রায় $46.67 দেয়, $45 নয়।"
            ]
          },
          {
            "heading": "একটি নিম্ন গড় একটি ক্ষতি অপসারণ না",
            "paragraphs": [
              "অতিরিক্ত 100টি শেয়ার $40 এ কেনার পরপরই, প্রতি শেয়ার $40 মূল্যের একটি 200-শেয়ার হোল্ডিংয়ের বাজার মূল্য $9,000 খরচের বিপরীতে $8,000। গড় দাম কমেছে, কিন্তু একটি অবাস্তব $1,000 পার্থক্য রয়ে গেছে এবং আরও বেশি অর্থ বিনিয়োগের জন্য উন্মুক্ত করা হয়েছে।",
              "$40 থেকে $45 গড় একটি সরানো হবে একটি 12.5% ​​ফি আগে মূল্য বৃদ্ধি. এটি পাটিগণিত, একটি পূর্বাভাস বা কেনার কারণ নয়। অবস্থান বৃদ্ধি ঝুঁকির পরিমাণের পাশাপাশি গড় মূল্য পরিবর্তন করে।"
            ],
            "table": {
              "headers": [
                "হোল্ডিং",
                "শেয়ার",
                "খরচ করা পরিমাণ"
              ],
              "rows": [
                [
                  "বিদ্যমান: $50/শেয়ার",
                  "100",
                  "$5,000"
                ],
                [
                  "নতুন: $40/শেয়ার",
                  "100",
                  "$4,000"
                ],
                [
                  "মিলিত গড়: $45",
                  "200",
                  "$9,000"
                ]
              ]
            }
          },
          {
            "heading": "ক্রয়ের গড় ট্যাক্স রেকর্ড থেকে আলাদা রাখুন",
            "paragraphs": [
              "ক্যালকুলেটরটি ক্রয়ের দুটি ব্লককে মডেল করে এবং ব্রোকারেজ ফি, বিনিময় হার, লভ্যাংশ, বিক্রয় এবং কর্পোরেট ক্রিয়াগুলি বাদ দেয়। বিভিন্ন মুদ্রায় করা কেনাকাটার তুলনা করার আগে ধারাবাহিকভাবে রেকর্ড রূপান্তর করুন।",
              "একটি গাণিতিক হোল্ডিং গড় করযোগ্য খরচের ভিত্তিতে নির্ধারণ নয়। ট্যাক্স-লট নিয়ম এবং অনুমোদিত পদ্ধতি এখতিয়ার এবং সম্পদ দ্বারা পরিবর্তিত হয়। এই ফলাফলটিকে ট্যাক্স-রিপোর্টিং নির্দেশনা হিসাবে বিবেচনা করার পরিবর্তে ব্রোকারের আসল লেনদেনের রেকর্ড রাখুন।"
            ]
          }
        ],
        "faqs": [
          {
            "question": "উচ্চ মূল্যে কেনার সময় আমি কি এটি ব্যবহার করতে পারি?",
            "answer": "হ্যাঁ। একই ওজনযুক্ত-গড় সূত্র প্রযোজ্য। আপনার বিদ্যমান গড় উপরে ক্রয় এটি বৃদ্ধি; পরিবর্তনের আকার নতুন পরিমাণের উপর নির্ভর করে।"
          },
          {
            "question": "আমার ব্রোকারের গড় আলাদা কেন?",
            "answer": "ফি, কারেন্সি কনভার্সন, রাউন্ডিং, কর্পোরেট অ্যাকশন বা ব্রোকারের অ্যাকাউন্টিং পদ্ধতি তার চিত্রে অন্তর্ভুক্ত করা যেতে পারে। এই টুলটি শুধুমাত্র দেখানো মূল্য এবং পরিমাণ ইনপুট ব্যবহার করে।"
          }
        ]
      },
      "compound": {
        "title": "মাসিক জমাসহ চক্রবৃদ্ধি সুদ: সূত্র ও হিসাবের উদাহরণ",
        "description": "কার্যকর বার্ষিক আয়, মাস-শেষের অবদান এবং অবদানকৃত অর্থ এবং অনুমানমূলক বিনিয়োগ বৃদ্ধির মধ্যে পার্থক্য বুঝুন।",
        "answer": "কার্যকর বার্ষিক রিটার্নকে মাসিক হারে রূপান্তর করুন, বিদ্যমান ব্যালেন্স বাড়ান, তারপর মাসের অবদান যোগ করুন। প্রদত্ত অর্থ বৃদ্ধি থেকে আলাদা রাখুন যাতে একটি বড় আমানত একটি ভাল রিটার্নের জন্য ভুল না হয়।",
        "sections": [
          {
            "heading": "বার্ষিক অনুমানকে ধারাবাহিকভাবে রূপান্তর করুন",
            "paragraphs": [
              "মিয়োটিজি বার্ষিক রিটার্নকে একটি কার্যকর বার্ষিক হার হিসাবে বিবেচনা করে। মাসিক হার হল (1 + বার্ষিক হার)^(1/12) − 1. বার্ষিক 5% এ, সেই মাসিক হার প্রায় 0.4074%, ঠিক 5% ÷ 12 নয়। 12 দ্বারা বিভক্ত একটি নামমাত্র উদ্ধৃত হার ব্যবহার করলে একটি ভিন্ন যৌগিক প্রথার বর্ণনা হবে।",
              "প্রতি মাসের জন্য, নতুন ব্যালেন্স = আগের ব্যালেন্স × (1 + মাসিক হার) + অবদান। অবদানগুলি মাসের শেষে যোগ করা হয়, তাই প্রথম আমানতটি অর্থপ্রদানের আগে নয় বরং পরবর্তী মাসগুলিতে রিটার্ন অর্জন করে৷"
            ]
          },
          {
            "heading": "আমানত আলাদা করে এক বছরের উদাহরণ দেখুন",
            "paragraphs": [
              "$1,000 দিয়ে শুরু করুন, প্রতি মাসের শেষে $100 অবদান রাখুন এবং এক বছরের জন্য একটি স্থির 5% কার্যকরী বার্ষিক রিটার্ন অনুমান করুন। শুরুর $1,000 বেড়ে $1,050; বারোটি মাসিক আমানত প্রায় $1,227.26-এ বৃদ্ধি পায়। মোট প্রায় $2,277.26।",
              "আপনি $2,200: $1,000 প্রাথমিকভাবে এবং বারো $100 ডিপোজিট সরবরাহ করেছেন। অবশিষ্ট আনুমানিক $77.26 মডেলের বৃদ্ধি। 0% রিটার্নের সাথে ব্যালেন্স ঠিক $2,200। ইনপুটগুলি অর্থপূর্ণ কিনা তা পরীক্ষা করার সময় এই শূন্য-রিটার্ন তুলনাটি কার্যকর।"
            ],
            "table": {
              "headers": [
                "এক বছরের দৃশ্যকল্প",
                "অর্থ সরবরাহ করা হয়েছে",
                "আনুমানিক ভারসাম্য"
              ],
              "rows": [
                [
                  "0% বার্ষিক রিটার্ন",
                  "$2,200",
                  "$2,200.00"
                ],
                [
                  "5% কার্যকর বার্ষিক রিটার্ন",
                  "$2,200",
                  "$2,277.26"
                ]
              ]
            }
          },
          {
            "heading": "একটি প্রতিশ্রুত ফলাফলের পরিবর্তে পরিস্থিতি ব্যবহার করুন",
            "paragraphs": [
              "আমানত ধ্রুবক ধরে রাখার সময় নিম্ন, মধ্যম এবং উচ্চতর অনুমানের তুলনা করুন। প্রকৃত বিনিয়োগ একটি মসৃণ মাসিক রিটার্ন প্রদান করে না এবং অর্থ যোগ করা বা তোলা হলে লাভ এবং ক্ষতির ক্রম গুরুত্বপূর্ণ।",
              "ফলাফল ট্যাক্স, বিনিয়োগ চার্জ বা মুদ্রাস্ফীতি কাটে না। এটি একটি আমানত উদ্ধৃতি বা একটি নির্দিষ্ট বিনিয়োগের পূর্বাভাস নয়৷ যদি একটি ব্যাঙ্ক বা প্রদানকারী একটি নামমাত্র হার, একটি ভিন্ন অবদানের সময় বা একটি ভিন্ন যৌগিক সময়সূচী জানায়, তাহলে এই টুলের সাথে তার উদাহরণ তুলনা করার আগে সেই নিয়মগুলিকে সারিবদ্ধ করুন৷"
            ]
          }
        ],
        "faqs": [
          {
            "question": "মাসিক অবদান কি মাসের শুরুতে বা শেষে করা হয়?",
            "answer": "প্রতিটি মডেলিং মাসের শেষে। মাসের শুরুর সময়সূচী প্রতিটি অবদানকে একটি অতিরিক্ত মাস বৃদ্ধি দেয় এবং একটি ভিন্ন ভারসাম্য তৈরি করতে পারে।"
          },
          {
            "question": "ফলাফল ট্যাক্স বা মুদ্রাস্ফীতি অন্তর্ভুক্ত?",
            "answer": "না। আউটপুট সেই প্রভাবগুলির আগে একটি অনুমানমূলক ভারসাম্য। একটি নামমাত্র ভারসাম্য এবং এর ভবিষ্যৎ ক্রয় ক্ষমতা বিভিন্ন পরিমাণ।"
          }
        ]
      },
      "unit-converter": {
        "title": "দৈর্ঘ্য, তাপমাত্রা ও ডেটা সংরক্ষণের একক রূপান্তর",
        "description": "ইউএস বনাম ইম্পেরিয়াল ভলিউম, তাপমাত্রা অফসেট এবং দশমিক বনাম বাইনারি স্টোরেজ ইউনিট চেক করার সময় সাধারণ পরিমাপ রূপান্তর করুন।",
        "answer": "একটি সাধারণ বেস ইউনিটের মাধ্যমে রূপান্তর করুন এবং প্রথমে ইউনিট সংজ্ঞা পরীক্ষা করুন। একটি মার্কিন গ্যালন একটি ইম্পেরিয়াল গ্যালন থেকে পৃথক, এবং একটি দশমিক গিগাবাইট একটি গিবিবাইট থেকে পৃথক। তাপমাত্রারও একটি অফসেট প্রয়োজন, শুধুমাত্র একটি গুণক নয়।",
        "sections": [
          {
            "heading": "দৈর্ঘ্য, ভর, ক্ষেত্রফল এবং আয়তন রূপান্তর উপাদান ব্যবহার করে",
            "paragraphs": [
              "একই মাত্রার এককের জন্য, উৎসের পরিমাণকে একটি বেস ইউনিটে রূপান্তর করুন এবং গন্তব্য ইউনিটের গুণক দ্বারা ভাগ করুন। এক মাইল হল 1.609344 কিলোমিটার, তাই 5 মাইল হল 8.04672 কিলোমিটার৷ একটি ক্ষেত্রফলের সাথে একটি দৈর্ঘ্য ফ্যাক্টরকে গুলিয়ে ফেলবেন না: বর্গ ইউনিটের জন্য একটি বর্গ রূপান্তর প্রয়োজন।",
              "ভলিউম মেনু স্পষ্টভাবে ইউএস লিকুইড গ্যালন এবং ইউএস কাপ ব্যবহার করে। একটি মার্কিন তরল গ্যালন হল 3.785411784 লিটার; এটি বৃহত্তর ইম্পেরিয়াল গ্যালন নয়। একটি রেসিপির কাপ অন্য নিয়ম ব্যবহার করতে পারে, তাই একটি নম্বর প্রয়োগ করার আগে রেসিপি বা পরিমাপের পাত্রটি পরীক্ষা করে দেখুন।"
            ]
          },
          {
            "heading": "তাপমাত্রা এবং স্টোরেজ সাধারণ ফাঁদ",
            "paragraphs": [
              "সেলসিয়াস থেকে ফারেনহাইটের জন্য °F = °C × 9/5 + 32 ব্যবহার করুন। বিপরীতের জন্য °C = (°F −32) × 5/9 ব্যবহার করুন। এই কারণেই 100 °F হল আনুমানিক 37.78°C এর পরিবর্তে 100 কে 5/9 দ্বারা গুণ করে প্রাপ্ত ফলাফলের চেয়ে।",
              "দশমিক স্টোরেজ ইউনিট 1,000 এর ক্ষমতা ব্যবহার করে; বাইনারি ইউনিট 1,024 এর ক্ষমতা ব্যবহার করে। এখানে 1 GB হল 1,000,000,000 বাইট, যেখানে 1 GiB হল 1,073,741,824 বাইট৷ এগুলি ডেটার পরিমাণ, ইন্টারনেট সংযোগের গতি বা ফাইল স্থানান্তরের সময় নয়।"
            ],
            "table": {
              "headers": [
                "ইনপুট",
                "রূপান্তরিত মান"
              ],
              "rows": [
                [
                  "1 মাইল",
                  "1.609344 কিমি"
                ],
                [
                  "1 মার্কিন তরল গ্যালন",
                  "3.785411784 এল"
                ],
                [
                  "100°ফা",
                  "37.777…°সে"
                ],
                [
                  "1 জিবি",
                  "1,073,741,824 খ"
                ]
              ]
            }
          },
          {
            "heading": "শেষ ধাপ পর্যন্ত সম্পূর্ণ নির্ভুলতা রাখুন",
            "paragraphs": [
              "একটি বিভাগ চয়ন করুন, একটি মান লিখুন এবং উত্স এবং গন্তব্য ইউনিট নির্বাচন করুন৷ ক্যালকুলেটরটি আট দশমিক স্থান পর্যন্ত প্রদর্শন করে, তাই খুব অল্প পরিমাণে পাঠযোগ্য থাকার জন্য একটি ছোট গন্তব্য ইউনিটের প্রয়োজন হতে পারে।",
              "গুন করার আগে একটি রূপান্তর ফ্যাক্টর রাউন্ড করা একটি ত্রুটিকে বড় করতে পারে। সহনশীল উত্পাদন কাজের জন্য, বৈজ্ঞানিক প্রতিবেদন বা একটি নির্ধারিত শিল্প মান, প্রয়োজনীয় নির্ভুলতা এবং সেই প্রসঙ্গে ব্যবহৃত সঠিক সংজ্ঞা যাচাই করুন।"
            ]
          }
        ],
        "faqs": [
          {
            "question": "আমি কি গ্রামকে সরাসরি মিলিলিটারে রূপান্তর করতে পারি?",
            "answer": "উপাদান এর ঘনত্ব ছাড়া না. গ্রাম ভর পরিমাপ করে এবং মিলিলিটার আয়তন পরিমাপ করে; তাদের মধ্যে একটি রূপান্তর একটি সর্বজনীন একক ফ্যাক্টর নয়।"
          },
          {
            "question": "মেনুর গ্যালন মানে কি ইউকে ইম্পেরিয়াল গ্যালন?",
            "answer": "না। মেনুটি US gal লেবেলযুক্ত এবং US তরল গ্যালন ব্যবহার করে। আপনার উৎস উপাদান দ্বারা প্রয়োজনীয় সংজ্ঞা ব্যবহার করুন."
          }
        ]
      },
      "age": {
        "title": "বয়স গণনা: জন্মদিন, পূর্ণ বছর ও জন্মের পর মোট দিন",
        "description": "পূর্ণ বয়সের বছর গণনা করুন, ক্যালেন্ডার-বছরের পার্থক্য থেকে বয়সকে আলাদা করুন এবং স্থানীয়-তারিখ এবং লিপ-জন্মদিনের নিয়মগুলি বুঝুন।",
        "answer": "রেফারেন্স বছর থেকে জন্ম সাল বিয়োগ করুন, তারপর যদি সেই বছর জন্মদিন না হয়ে থাকে তাহলে একটি বিয়োগ করুন। Myeotiji রেফারেন্স তারিখের জন্য আপনার ব্রাউজারে আজকের ক্যালেন্ডার তারিখ ব্যবহার করে।",
        "sections": [
          {
            "heading": "একটি বছরের পার্থক্য সবসময় একটি সম্পূর্ণ বয়স নয়",
            "paragraphs": [
              "31 ডিসেম্বর, 2000-এ জন্মগ্রহণকারী কেউ 30 ডিসেম্বর, 2026-এ 25 বছর এবং 31 ডিসেম্বর 26-এ পরিণত হবে৷ কেবল একটি দিন আগে 2026 থেকে 2000 বিয়োগ করলে পূর্ণ বয়স এক দ্বারা বাড়াবে৷",
              "প্রথমে মাস এবং তারপর দিন তুলনা করুন। রেফারেন্স মাস জন্ম মাসের চেয়ে আগের হলে, এক বছর বিয়োগ করুন। যদি মাস মেলে কিন্তু রেফারেন্স দিন আগে হয়, তাহলে একটিও বিয়োগ করুন। অন্যথায় বছরের পার্থক্য রাখুন।"
            ]
          },
          {
            "heading": "ক্যালকুলেটর দ্বারা ব্যবহৃত তারিখ বুঝুন",
            "paragraphs": [
              "বয়স ক্যালকুলেটরে জন্ম তারিখ লিখুন। এটি আপনার ব্রাউজার থেকে বর্তমান স্থানীয় ক্যালেন্ডার তারিখ ব্যবহার করে এবং জন্মের পর থেকে অতিবাহিত ক্যালেন্ডার দিনগুলিও রিপোর্ট করে৷ এই গাইডের সারণীতে রেফারেন্স তারিখগুলি নির্দিষ্ট চিত্র; লাইভ টুল একটি পৃথক ঐতিহাসিক-রেফারেন্স-তারিখ ক্ষেত্র প্রদান করে না।",
              "বিভিন্ন সময় অঞ্চলের ব্যবহারকারীরা জন্মদিনে মধ্যরাতে বিভিন্ন বয়স দেখতে পারেন। দিন গণনা সঠিক জন্ম সময়ের পরিবর্তে শুধুমাত্র তারিখ-গণিত ব্যবহার করে। একটি ভবিষ্যত জন্ম তারিখ একটি বৈধ সম্পূর্ণ বয়স ইনপুট নয়।"
            ],
            "table": {
              "headers": [
                "জন্ম তারিখ",
                "উদাহরণে রেফারেন্স তারিখ",
                "বয়স পূর্ণ"
              ],
              "rows": [
                [
                  "2000-12-31",
                  "2026-12-30",
                  "25"
                ],
                [
                  "2000-12-31",
                  "2026-12-31",
                  "26"
                ],
                [
                  "2000-12-31",
                  "2027-01-01",
                  "26"
                ]
              ]
            }
          },
          {
            "heading": "লিপ-ডে এবং অফিসিয়াল যোগ্যতা নিয়ম যত্ন প্রয়োজন",
            "paragraphs": [
              "29 ফেব্রুয়ারির জন্মদিনের জন্য, এই টুলটি সরাসরি মাস এবং দিনের তুলনা করে। একটি নন-লিপ বছরে এটির পূর্ণ-বছরের গণনা মার্চ 1-এ বৃদ্ধি পায়। এটি একটি বিবৃত ক্যালকুলেটর কনভেনশন, প্রতিটি এখতিয়ারে আইনি বয়স সম্পর্কে কোনও শাসন নয়।",
              "একটি ভর্তি, সুবিধা, বীমা চুক্তি বা অন্যান্য অফিসিয়াল প্রক্রিয়া একটি নির্দিষ্ট তারিখে বা একটি বিশেষ জন্মদিনের নিয়মে একটি বয়স ব্যবহার করতে পারে। সেই প্রক্রিয়ার সংজ্ঞা পরীক্ষা করুন। একটি দৈনন্দিন বর্তমান বয়সের ফলাফল তার যোগ্যতা মূল্যায়ন প্রতিস্থাপন করতে পারে না।"
            ]
          }
        ],
        "faqs": [
          {
            "question": "কেন ফলাফল একটি ক্যালেন্ডারে দেখানো বছরের থেকে ভিন্ন হতে পারে?",
            "answer": "ক্যালেন্ডার-বছরের বিয়োগ জন্মদিন হয়েছে কিনা তা উপেক্ষা করে। পূর্ণ বয়স গণনা জন্মদিন আসলে উল্লিখিত তারিখ কনভেনশনের অধীনে পৌঁছেছে।"
          },
          {
            "question": "আমি কি এর পরিবর্তে 365 দ্বারা বিভক্ত অতিবাহিত দিনগুলি ব্যবহার করতে পারি?",
            "answer": "একটি সঠিক পূর্ণ-বছর বয়সের জন্য নয়। লিপ ইয়ার এবং জন্মদিনের অবস্থান সেই শর্টকাটটিকে বয়সের সীমানায় অবিশ্বস্ত করে তোলে।"
          }
        ]
      }
    },
    "legalLabels": {
      "privacy": "গোপনীয়তা এবং কুকিজ",
      "terms": "ব্যবহার এবং সীমাবদ্ধতা",
      "contact": "যোগাযোগ এবং সংশোধন",
      "notice": "সাধারণ তথ্যের জন্য অনুমান। এই পরিষেবাটি ব্যক্তিগত ট্যাক্স, আইনি, বেতন বা বিনিয়োগের পরামর্শ প্রদান করে না, রিটার্ন প্রস্তুত করে না বা আপনার প্রতিনিধিত্ব করে না। ফলাফলের উপর নির্ভর করার আগে বিবৃত বছর, অবস্থান এবং বর্জন পরীক্ষা করুন।",
      "tracking": "Google Analytics সাধারণভাবে চালু থাকে এবং পৃষ্ঠার নিচে বন্ধ করা যায়। ক্যালকুলেটরের ইনপুট পাঠানো হয় না। অ-ব্যক্তিগতকৃত বিজ্ঞাপন চাওয়ার জন্য AdSense যুক্ত আছে। Google ও অংশীদাররা বিজ্ঞাপন দেখানো এবং পরিমাপের জন্য কুকি, ওয়েব বিকন, IP ঠিকানা ও শনাক্তকারী ব্যবহার করতে পারে। অ-ব্যক্তিগতকৃত বিজ্ঞাপনেও কুকি থাকতে পারে। বিজ্ঞাপন দেখানো সাইটের অনুমোদন, অ্যাকাউন্ট সেটিং এবং প্রযোজ্য সম্মতির ওপর নির্ভরশীল। চীনা পৃষ্ঠায় বিশ্লেষণ ও বিজ্ঞাপন বন্ধ থাকে।"
    },
    "legal": {
      "privacy": [
        [
          "সুযোগ এবং অপারেটর",
          "Myeotiji দক্ষিণ কোরিয়া থেকে পরিচালিত। এই বিজ্ঞপ্তি বাংলা পৃষ্ঠাগুলোর জন্য প্রযোজ্য। যোগাযোগ: contact@myeotiji.kr। অন্য ভাষার পৃষ্ঠায় সেটিং ভিন্ন হতে পারে।"
        ],
        [
          "ক্যালকুলেটর ইনপুট",
          "আপনার ব্রাউজারে গণনা চালানো হয়। এই সংস্করণটি অপারেটর ডাটাবেস বা বিশ্লেষণ পরিষেবাতে ক্যালকুলেটরের পরিমাণ, বেতন, তারিখ বা ফলাফল পাঠায় না। ইউআরএল-এ ব্যক্তিগত ডেটা রাখবেন না বা আমাদের কাছে পরিচয় নথি, অ্যাকাউন্টের বিবরণ বা বেতনের রেকর্ড পাঠাবেন না।"
        ],
        [
          "বিশ্লেষণ, বিজ্ঞাপন এবং কুকিজ",
          "Google Analytics সাধারণভাবে চালু থাকে এবং পৃষ্ঠার নিচে বন্ধ করা যায়। ক্যালকুলেটরের ইনপুট পাঠানো হয় না। অ-ব্যক্তিগতকৃত বিজ্ঞাপন চাওয়ার জন্য AdSense যুক্ত আছে। Google ও অংশীদাররা বিজ্ঞাপন দেখানো এবং পরিমাপের জন্য কুকি, ওয়েব বিকন, IP ঠিকানা ও শনাক্তকারী ব্যবহার করতে পারে। অ-ব্যক্তিগতকৃত বিজ্ঞাপনেও কুকি থাকতে পারে। বিজ্ঞাপন দেখানো সাইটের অনুমোদন, অ্যাকাউন্ট সেটিং এবং প্রযোজ্য সম্মতির ওপর নির্ভরশীল। চীনা পৃষ্ঠায় বিশ্লেষণ ও বিজ্ঞাপন বন্ধ থাকে।"
        ],
        [
          "প্রয়োজনীয় হোস্টিং এবং বিদেশী প্রক্রিয়াকরণ",
          "Vercel এই ওয়েবসাইটটি সরবরাহ করে এবং রক্ষা করে। অনুরোধগুলি অগত্যা হোস্টিং পরিকাঠামোতে সংযোগ তথ্য যেমন IP ঠিকানা, অনুরোধ করা URL, সময়, ডিভাইস/ব্রাউজার শিরোনাম এবং নিরাপত্তা সংকেত প্রকাশ করে। এই ধরনের তথ্য মার্কিন যুক্তরাষ্ট্র বা অন্যান্য অবকাঠামো অবস্থান সহ আপনার দেশের বাইরে প্রক্রিয়া করা হতে পারে। বিশ্লেষণ নিষ্ক্রিয় করা এই প্রক্রিয়াকরণকে সরিয়ে দেয় না। আমরা এটি বিতরণ, নিরাপত্তা এবং ত্রুটি তদন্তের জন্য ব্যবহার করি, বিজ্ঞাপন প্রোফাইল নয়।"
        ],
        [
          "ধারণ এবং আপনার পছন্দ",
          "ক্যালকুলেটর ইনপুট সার্ভার রেকর্ড হিসাবে আমাদের দ্বারা রাখা হয় না. হোস্টিং লগ প্রদানকারীর ধারণ এবং প্রযোজ্য প্রকল্প সেটিংস অনুসরণ করে; আমরা সমস্ত অবকাঠামো লগের জন্য একটি নির্দিষ্ট ধারণ সময় যাচাই করিনি। প্রযোজ্য বিবরণের জন্য বা আপনার আইনের অধীনে উপলব্ধ অ্যাক্সেস, সংশোধন, মুছে ফেলা বা সীমাবদ্ধতার অনুরোধ করতে আমাদের সাথে যোগাযোগ করুন। আমরা অনুরোধ এবং আইনি ব্যতিক্রমগুলি মূল্যায়ন করি, এবং প্রতিশ্রুতি দিই না যে সমস্ত প্রদানকারী লগ অবিলম্বে মুছে ফেলা হবে। পৃষ্ঠাটি বন্ধ করা তার ইন-মেমরি গণনা অবস্থা পরিষ্কার করে; আপনার ব্রাউজার ইতিহাস সংরক্ষণ করতে পারে বা একটি ট্যাব পুনরুদ্ধার করতে পারে।"
        ],
        [
          "ইমেল এবং বহিরাগত লিঙ্ক",
          "আপনি যদি আমাদের ইমেল করতে পছন্দ করেন, আমরা অনুরোধটি পরিচালনা করার জন্য আপনার ঠিকানা এবং বার্তা গ্রহণ করি এবং সেই উদ্দেশ্যে বা আইনি বাধ্যবাধকতার জন্য যা প্রয়োজন তা কেবল ধরে রাখি। কাল্পনিক উদাহরণ ব্যবহার করুন, প্রকৃত ব্যক্তিগত আর্থিক রেকর্ড নয়। হিসাব করার জন্য ইমেলের প্রয়োজন নেই। অফিসিয়াল রেফারেন্সগুলি তাদের নিজস্ব নীতি সহ তৃতীয় পক্ষের ওয়েবসাইটগুলি খোলে৷ ট্র্যাকিং বা ডেটা ব্যবহারের পরিবর্তনের জন্য এই বিজ্ঞপ্তিটি আপডেট করতে হবে এবং সক্রিয়করণের আগে আইনগতভাবে প্রয়োজনীয় পছন্দগুলি বাস্তবায়ন করতে হবে।"
        ]
      ],
      "terms": [
        [
          "উদ্দেশ্য",
          "বিনামূল্যে, স্ব-পরিষেবা পাটিগণিত এবং সাধারণ ব্যাখ্যা. আমরা আপনার আইনজীবী, হিসাবরক্ষক, ট্যাক্স প্রস্তুতকারী, বেতন প্রদানকারী, বিনিয়োগ উপদেষ্টা বা সরকারী সংস্থা হিসাবে নিজেদেরকে ধরে রাখি না। শুধুমাত্র একটি ক্যালকুলেটর ব্যবহার করে কোন পেশাদার-ক্লায়েন্ট সম্পর্ক তৈরি হয় না।"
        ],
        [
          "অনুমান পরীক্ষা করুন",
          "ফলাফল বিবৃত বছর, এখতিয়ার এবং মডেলের জন্য অনুমান। ট্যাক্স স্ট্যাটাস, ছাড়, পরিকল্পনা নথি, স্থানীয় নিয়ম, রাউন্ডিং এবং পরিবর্তন আইন প্রকৃত ফলাফল পরিবর্তন করতে পারে। একটি উদাহরণ একটি গ্যারান্টি নয়. ফাইলিং, মজুরি প্রদান, বিনিয়োগ, দান বা ভ্রমণ বুকিং করার আগে প্রাসঙ্গিক অফিসিয়াল পরিষেবা বা যোগ্য পেশাদারের সাথে যাচাই করুন।"
        ],
        [
          "নির্দিষ্ট সীমা",
          "ইউএস ওভারটাইম ফেডারেল কভারড-নন-এক্সেম্পট বেসলাইন ব্যবহার করে, সব রাজ্যের নিয়ম নয়। টেক-হোম পে হল একটি সরলীকৃত বার্ষিক চিত্র, W-4 বা ফাইলিং গণনা নয়। একটি 401(k) ম্যাচ একটি অর্পিত ব্যালেন্স বা অবদান সুপারিশ নয়। স্টক গড় এবং যৌগিক সরঞ্জাম সিকিউরিটিজ বা গ্যারান্টি রিটার্ন সুপারিশ করে না। তারিখ এবং বয়স সরঞ্জাম আইনি যোগ্যতা বা সময়সীমা নির্ধারণ করে না।"
        ],
        [
          "ত্রুটি এবং দায়িত্ব",
          "কাল্পনিক ইনপুট এবং প্রভাবিত URL ব্যবহার করে একটি সন্দেহজনক ত্রুটি রিপোর্ট করুন। যখন অনুমান যাচাই করা যায় না তখন আমরা প্রভাবিত টুলটিকে সংশোধন, সতর্ক বা সাময়িকভাবে সীমাবদ্ধ করতে পারি। এই বিজ্ঞপ্তি সুযোগ বর্ণনা করে; ইচ্ছাকৃত অসদাচরণ বা স্থূল অবহেলার জন্য প্রযোজ্য দায় সহ, বা বাধ্যতামূলক ভোক্তা অধিকার অপসারণ সহ আইনত বাদ দেওয়া যায় না এমন দায় বাদ দেয় না।"
        ],
        [
          "সমর্থন এবং পরিবর্তন",
          "সহায়তা প্রযুক্তিগত ত্রুটি এবং সাধারণ উত্স সংশোধন পরিচালনা করে। পৃথক করের অবস্থান, আইনি সিদ্ধান্ত, ফাইলিং প্রস্তুতি বা প্রতিনিধিত্বের জন্য অনুরোধ করবেন না। আমরা এই ধরনের অনুরোধগুলি প্রাসঙ্গিক কর্তৃপক্ষ বা একজন যোগ্যতাসম্পন্ন পেশাদারের কাছে নির্দেশ করব৷ উপাদান পরিবর্তন পৃষ্ঠা তারিখ প্রতিফলিত হয়; প্রতিবার অনুমানগুলি পুনরায় পরীক্ষা করুন।"
        ]
      ],
      "contact": [
        [
          "প্রযুক্তিগত সমস্যা, সংশোধন এবং গোপনীয়তার অনুরোধ",
          "পৃষ্ঠার URL, প্রযোজ্য বছর/অঞ্চল এবং প্রত্যাশিত এবং প্রদর্শিত ফলাফল দেখানো একটি কাল্পনিক উদাহরণ সহ contact@myeotiji.kr ইমেল করুন। এছাড়াও আপনি এখানে ডেটা প্রসেসিং বা প্রযোজ্য গোপনীয়তা অধিকার অনুশীলন সম্পর্কে তথ্যের জন্য অনুরোধ করতে পারেন। আমরা একটি অ্যাকাউন্ট বা একটি ফর্ম প্রয়োজন হয় না."
        ],
        [
          "আপনার তথ্য নিরাপদ রাখুন",
          "সরকারি শনাক্তকারী, ব্যাঙ্ক অ্যাকাউন্ট, পাসওয়ার্ড, সম্পূর্ণ পেস্লিপ বা প্রকৃত ট্যাক্স নথি ইমেল করবেন না। আমরা ব্যক্তিগত কর, আইনি বা বিনিয়োগ পরামর্শ বা আপনার পক্ষে কাজ অফার করি না। ফাইলিং, অর্থপ্রদান বা কর্মসংস্থানের সময়সীমার জন্য, সরাসরি সংশ্লিষ্ট কর্তৃপক্ষ বা যোগ্য পেশাদারের সাথে যোগাযোগ করুন।"
        ]
      ]
    },
    "policy": [
      {
        "heading": "উদ্দেশ্য এবং লেখকত্ব",
        "text": "Myeotiji এই সাইটে উপলব্ধ ক্যালকুলেটরগুলির ব্যাখ্যা প্রকাশ করে। এই গাইডগুলি AI সহায়তায় প্রস্তুত করা হয়েছিল এবং বর্ণিত গণনা পদ্ধতি, কাজের উদাহরণ এবং উদ্ধৃত রেফারেন্সের বিপরীতে পরীক্ষা করা হয়েছিল। লেখকের নাম মাইয়োটিজিকে প্রকাশনা পরিষেবা হিসাবে চিহ্নিত করেছে; এটি কোনো নামধারী হিসাবরক্ষক, আইনজীবী বা নিয়ন্ত্রিত উপদেষ্টার দ্বারা পর্যালোচনার দাবি করে না।"
      },
      {
        "heading": "উত্স, তারিখ এবং প্রযোজ্য নিয়ম",
        "text": "আইন, কর, বেতন এবং সামাজিক-বীমা বিষয়ের জন্য, আমরা দায়িত্বশীল সরকারী কর্তৃপক্ষের প্রকাশনা এবং প্রাসঙ্গিক নথির লিঙ্ক পছন্দ করি। প্রদানকারী শর্তাবলী এবং প্রযুক্তিগত মান যেমন চিহ্নিত করা হয়. মিয়োটিজির লেখা একটি গাণিতিক উদাহরণ হল একটি দৃষ্টান্ত, কোনো কর্তৃপক্ষের উদ্ধৃতি নয়। দৃশ্যমান আপডেট তারিখটি একটি উপাদান সামগ্রী পর্যালোচনা রেকর্ড করে, একটি স্বয়ংক্রিয় দৈনিক রিফ্রেশ নয়। দেশ, বছর এবং বর্জন প্রতিটি নির্দেশিক বিষয় উল্লেখ করা হয়েছে."
      },
      {
        "heading": "একটি গণনা কি স্থাপন করতে পারে এবং কি করতে পারে না",
        "text": "আমরা প্রতিনিধি সংখ্যাসূচক উদাহরণ এবং সীমানা শর্ত চেক. সাধারণ মডেলগুলি এখনও এমন তথ্যগুলি ছেড়ে দেয় যা প্রকৃত অর্থপ্রদান বা এনটাইটেলমেন্ট পরিবর্তন করতে পারে। কাল্পনিক বিনিয়োগ বৃদ্ধি একটি প্রতিশ্রুত রিটার্ন নয়, এবং একটি বেতন অনুমান একটি চূড়ান্ত কর মূল্যায়ন নয়। উদাহরণ দেখানো অনুমান ব্যবহার; পাঠকদের প্রকৃত প্রদানকারী, নিয়োগকর্তা বা কর্তৃপক্ষের রেকর্ড যাচাই করা উচিত একটি ফলাফলের সিদ্ধান্তের জন্য একটি চিত্রের উপর নির্ভর করার আগে।"
      },
      {
        "heading": "সংশোধন এবং প্রতিক্রিয়া",
        "text": "আপনি যদি একটি ভুল সূত্র, উৎস, অনুবাদ বা উদাহরণ খুঁজে পান, তাহলে অনুগ্রহ করে আমাদের যোগাযোগের ঠিকানায় পৃষ্ঠার ঠিকানা, প্রাসঙ্গিক ইনপুট এবং ফলাফলটি পাঠান। শনাক্তকরণ নথি, সম্পূর্ণ বেতন বিবরণী, অ্যাকাউন্ট নম্বর বা অন্যান্য অপ্রয়োজনীয় ব্যক্তিগত তথ্য পাঠাবেন না। ব্যাখ্যাটি তদন্ত এবং আপডেট করতে আমরা একটি পুনরুত্পাদনযোগ্য উদাহরণ ব্যবহার করতে পারি।"
      }
    ]
  },
  "ur": {
    "labels": {
      "home": "کیلکولیٹر",
      "guides": "حساب کتاب کے رہنما",
      "policy": "ہم ان گائیڈز کو کیسے تیار کرتے ہیں۔",
      "title": "کیلکولیشن گائیڈز: فارمولے اور کام کی مثالیں۔",
      "description": "تاریخوں، پیسے اور روزمرہ کے فیصلوں کے لیے عملی حساب کتاب۔ ایک کیلکولیٹر کا انتخاب کریں اور جواب کے پیچھے فارمولہ دیکھیں۔",
      "intro": "اس سوال سے شروع کریں جس کا آپ جواب دینا چاہتے ہیں۔ ہر گائیڈ طریقہ کار کی وضاحت کرتا ہے، نمبرز اور کیلکولیٹر کے لنکس کے ذریعے کام کرتا ہے جسے آپ اپنے ان پٹ کے ساتھ استعمال کر سکتے ہیں۔",
      "global": "رقم، تاریخیں اور روزمرہ کے حساب کتاب",
      "country": "ریاستہائے متحدہ: تنخواہ، ٹیکس اور ریٹائرمنٹ",
      "quick": "فوری جواب",
      "contents": "اس صفحہ پر",
      "try": "کیلکولیٹر آزمائیں۔",
      "related": "متعلقہ گائیڈز",
      "questions": "عام سوالات",
      "references": "ذرائع اور مزید پڑھنا",
      "updated": "تازہ کاری",
      "author": "مییوتی جی نے تیار کیا۔",
      "exampleNote": "مثالیں بیان کردہ مفروضوں کو واضح کرتی ہیں۔ اصل فیس، ریٹرن اور پے رول کی رقم مختلف ہو سکتی ہے۔",
      "policyTitle": "Myeotiji کیلکولیشن گائیڈز: ذرائع اور ادارتی طریقہ",
      "policyDescription": "میوتی جی حساب کی وضاحت کیسے کرتے ہیں، مثالیں چیک کرتے ہیں، ذرائع کا حوالہ دیتے ہیں اور تصحیح اور تخمینوں کو سنبھالتے ہیں۔",
      "calculatorLink": "فارمولہ دیکھیں، کام کی گئی مثال اور عام غلطیاں →",
      "homeTitle": "مفت مالیاتی اور روزانہ کیلکولیٹر | میوتی جی",
      "homeHeading": "پیسے، کام اور روزمرہ کی زندگی کے لیے مفت کیلکولیٹر",
      "homeDescription": "تاریخوں، پیسے اور روزمرہ کے فیصلوں کے لیے عملی حساب کتاب۔ ایک کیلکولیٹر کا انتخاب کریں اور جواب کے پیچھے فارمولہ دیکھیں۔"
    },
    "guides": {
      "fee": {
        "title": "لین دین کی فیس: مطلوبہ خالص رقم کے لیے کتنی رقم وصول کریں؟",
        "description": "فیصد اور مقررہ فیس کے بعد خالص آمدنی پر کام کریں، پھر ہدف کی ادائیگی کے لیے درکار چارج تلاش کرنے کے لیے فارمولے کو الٹ دیں۔",
        "answer": "فی صد فیس اور مقررہ فیس دونوں کو چارج سے گھٹائیں۔ فیس کے بعد ایک خاص رقم وصول کرنے کے لیے، ہدف کے علاوہ مقررہ فیس کو ایک منفی فیصد کی شرح سے تقسیم کریں۔",
        "sections": [
          {
            "heading": "فیس کے دو حصوں کو الگ کریں۔",
            "paragraphs": [
              "جمع شدہ رقم کے ساتھ ایک فیصد فیس بڑھ جاتی ہے۔ ایک مقررہ ٹرانزیکشن فیس نہیں ہے. ضرب کرنے سے پہلے فیصد کو اعشاریہ کے طور پر لکھیں۔ فرضی 3% فیس کے لیے، 0.03 استعمال کریں۔ 0.30 فکسڈ فیس کا مطلب ہے آپ کی منتخب کردہ کرنسی میں 30 سینٹ، کوئی اور فیصد نہیں۔",
              "خالص آمدنی = چارج × (1 - شرح) - مقررہ فیس۔ چیک کریں کہ فراہم کنندہ اپنی شرح کو کس رقم پر لاگو کرتا ہے: شپنگ، ٹیکس، کرنسی کی تبدیلی اور سرحد پار چارجز کا الگ علاج ہو سکتا ہے۔ یہ گائیڈ ریاضی کی وضاحت کرتا ہے، کسی فراہم کنندہ کے موجودہ ٹیرف کی نہیں۔",
              "خالص وصولی = وصول کی گئی رقم × (1 − فیس کی شرح) − مقررہ فیس۔ مطلوبہ وصولی = (مطلوبہ خالص رقم + مقررہ فیس) ÷ (1 − فیس کی شرح)۔"
            ]
          },
          {
            "heading": "ایک کام شدہ مثال: کیوں 3٪ شامل کرنا کافی نہیں ہے۔",
            "paragraphs": [
              "فرض کریں کہ آپ $100 جمع کرتے ہیں اور فرضی فیس 3% جمع $0.30 ہے۔ فیصد حصہ $3 ہے؛ مقررہ حصہ شامل کرنے سے $3.30 فیس اور $96.70 خالص آمدنی ملتی ہے۔",
              "$100 نیٹ وصول کرنے کے لیے، چارج حل کریں × 0.97 − 0.30 = 100۔ مطلوبہ غیر گول چارج 100.30 ÷ 0.97 ہے، تقریباً $103.4021۔ $100 میں 3% کا اضافہ کرنے سے $103 ملتا ہے، جس کا خالص صرف $99.61 ہے۔ فرق پیدا ہوتا ہے کیونکہ فراہم کنندہ بڑھے ہوئے چارج پر بھی فیس لیتا ہے۔"
            ],
            "table": {
              "headers": [
                "چارج",
                "فرضی فیس",
                "نیٹ"
              ],
              "rows": [
                [
                  "$100.00",
                  "$3.30",
                  "$96.70"
                ],
                [
                  "$103.00",
                  "$3.39",
                  "$99.61"
                ],
                [
                  "$103.40",
                  "راؤنڈنگ سے پہلے $3.402",
                  "گول کرنے سے پہلے $99.998"
                ]
              ]
            }
          },
          {
            "heading": "نتیجہ کو قیمتوں کی جانچ کے طور پر استعمال کریں۔",
            "paragraphs": [
              "فارورڈ کیلکولیشن کے لیے جمع کی گئی رقم درج کریں، یا ریورس کیلکولیشن کے لیے ٹارگٹ نیٹ موڈ کو منتخب کریں۔ منتخب کرنسی کو اپنی مقررہ فیس کے مطابق رکھیں۔ کرنسی کا انتخاب فارمیٹنگ میں تبدیلی کرتا ہے۔ یہ شرح مبادلہ کی تبدیلی کو انجام نہیں دیتا۔",
              "اسکرین ڈسپلے کے لیے نتیجہ کو گول کرتی ہے۔ اگر کم از کم ادائیگی کو بالکل پورا کرنا ضروری ہے، تو اگلی سب سے چھوٹی کرنسی میں اضافہ اور اپنے فراہم کنندہ کے راؤنڈنگ کے قواعد کو چیک کریں۔ ریفنڈز، کم از کم فیس، فیس پر ٹیکس اور آیا سرچارجز کی اجازت ہے الگ چیک کی ضرورت ہے۔"
            ]
          }
        ],
        "faqs": [
          {
            "question": "کیا 0% فیس کا ہمیشہ یہ مطلب ہوتا ہے کہ میں پورا چارج وصول کرتا ہوں؟",
            "answer": "صرف اس صورت میں جب مقررہ فیس بھی صفر ہو اور کوئی دوسری کٹوتی لاگو نہیں ہوتی ہے۔ 0% فیصد فیس کے علاوہ $0.30 مقررہ فیس اب بھی $100 چارج سے $99.70 چھوڑتی ہے۔"
          },
          {
            "question": "کیا میں مختلف ادائیگی فراہم کرنے والوں کا موازنہ کر سکتا ہوں؟",
            "answer": "ہاں، ایک ہی چارج کا استعمال کرتے ہوئے ہر فراہم کنندہ کی شائع شدہ شرح اور مقررہ فیس درج کریں۔ کسی بھی اضافی چارجز اور اپنے اکاؤنٹ پر لاگو ہونے والی شرائط کے ساتھ نتیجہ کا موازنہ کریں۔"
          }
        ]
      },
      "discount": {
        "title": "20% کے بعد 10% رعایت: کل رعایت 28% کیوں بنتی ہے؟",
        "description": "یکے بعد دیگرے چھوٹ کا حساب لگائیں، کوپن کے مجموعوں کا موازنہ کریں اور آخری قیمت کے فیصد کو محفوظ کردہ رقم سے الگ کریں۔",
        "answer": "دوسری رعایت کو پہلے سے کم قیمت پر لاگو کریں۔ 20% ڈسکاؤنٹ کے بعد 10% اصل قیمت کا 80% × 90% = 72% چھوڑتا ہے، لہذا کل بچت 28% ہے۔",
        "sections": [
          {
            "heading": "آپ جو قیمت ادا کرتے رہتے ہیں اسے ضرب دیں۔",
            "paragraphs": [
              "ہر فیصد رعایت کے لیے، اعشاریہ کی شرح کو ایک سے گھٹائیں۔ اصل قیمت کو باقی حصوں سے ضرب دیں۔ دو رعایتوں کے ساتھ، حتمی قیمت = اصل × (1 − پہلی شرح) × (1 − دوسری شرح)۔ مؤثر رعایت = 1 - حتمی قیمت ÷ اصل قیمت۔",
              "نرخوں کو شامل کرنے سے دونوں رعایتوں کو ایسا ہی سمجھا جائے گا جیسے انہوں نے اصل قیمت پر لاگو کیا ہو۔ یہ ایک مختلف پیشکش ہے۔ ایک سٹور جس میں ایک 30% کمی کا وعدہ کیا جاتا ہے وہ دوسری شرائط پر غور کرنے سے پہلے، لگاتار 20% اور 10% کمیوں سے زیادہ فیصد کمی دے رہا ہے۔"
            ]
          },
          {
            "heading": "ایک $100 آئٹم پر دو پیشکشوں کا موازنہ کریں۔",
            "paragraphs": [
              "پہلی 20% کمی کے بعد آئٹم کی قیمت $80 ہے۔ دوسری 10% کمی $8 کو ہٹاتی ہے، $72 کو چھوڑ کر۔ کل بچت $28 ہے۔ دو خالص فیصد رعایت کے آرڈر کو تبدیل کرنے سے وہی ریاضیاتی نتیجہ ملتا ہے، کیونکہ باقی قیمت کے عوامل ضرب ہوتے ہیں۔",
              "اس آرڈر کا اصول خود بخود ایک فکسڈ ویلیو کوپن تک نہیں بڑھتا ہے۔ $10 کا کوپن $100 کے آئٹم پر 20% چھوٹ کے بعد $70 دیتا ہے۔ پہلے $10 چھوٹ لینے اور پھر 20% لگانے سے $72 ملتا ہے۔ کم سے کم خرچ، کیپس اور خارج کردہ مصنوعات تبدیل کر سکتے ہیں کہ اصل میں کون سی پیشکش استعمال کی جا سکتی ہے۔"
            ],
            "table": {
              "headers": [
                "پیشکش",
                "حتمی قیمت",
                "محفوظ کرنا"
              ],
              "rows": [
                [
                  "20%، پھر 10%",
                  "$72",
                  "28%"
                ],
                [
                  "ایک 30% رعایت",
                  "$70",
                  "30%"
                ],
                [
                  "20%، پھر ایک $10 کوپن",
                  "$70",
                  "$30"
                ]
              ]
            }
          },
          {
            "heading": "مشتہر کردہ کمی درج کریں، باقی قیمت نہیں۔",
            "paragraphs": [
              "کیلکولیٹر کے فیلڈز ڈسکاؤنٹ فیصد لیتے ہیں۔ ایک لیبل کہتا ہے کہ اصل قیمت کا 80% ادا کرنے کا مطلب ہے 20% رعایت۔ 80 درج کرنے سے بجائے 80% کمی کا حساب لگایا جائے گا۔",
              "یہ ٹول دو متواتر فیصد کمی کو ماڈل کرتا ہے۔ یہ سیلز ٹیکس، ڈیلیوری، کیش بیک یا فکسڈ کوپن شامل نہیں کرتا ہے۔ جب وہ آئٹمز مختلف ہوں تو چیک آؤٹ کے ٹوٹل کا موازنہ کریں، اور ہر قدم پر بیچنے والے کی اصل گول کرنے کی اجازت دیں۔"
            ]
          }
        ],
        "faqs": [
          {
            "question": "کیا 50% چھوٹ کے بعد 50% چھوٹ مفت ہے؟",
            "answer": "نہیں۔ پہلی کمی کے بعد آدھی اصل قیمت باقی رہ جاتی ہے، اور دوسری کے بعد آدھی باقی رہ جاتی ہے۔ آپ اصل قیمت کا 25% ادا کرتے ہیں، 75% بچت۔"
          },
          {
            "question": "میری رسید پر بچت میں تھوڑا فرق کیوں ہے؟",
            "answer": "ایک خوردہ فروش ہر آئٹم یا ہر ڈسکاؤنٹ کو الگ الگ کر سکتا ہے، یا مختلف اہل مقداروں پر رعایت کا اطلاق کر سکتا ہے۔ یہ کیلکولیٹر گول نتیجہ ظاہر کرنے سے پہلے دو بیان کردہ فیصد کا استعمال کرتا ہے۔"
          }
        ]
      },
      "days": {
        "title": "دو تاریخوں کے درمیان دن: پہلا دن اور لیپ سال کیسے شمار کریں",
        "description": "سمجھیں کہ گزرے ہوئے دن بمقابلہ شامل تاریخ کی گنتی، لیپ دن، ویک اینڈ اور کیلنڈر ڈے ٹول ڈیڈ لائن کیلکولیٹر سے مختلف کیوں ہے۔",
        "answer": "گزرے ہوئے کیلنڈر کے دنوں کے لیے، تاریخ شروع ہونے کی تاریخ کو ختم کر دیں۔ اگر شروعاتی دن 1 دن ہے، تو آگے کی تاریخ کی حد کے لیے ایک شامل کریں۔ 1 جنوری سے 11 جنوری 10 گزرے ہوئے دن یا 11 دن شامل ہیں۔",
        "sections": [
          {
            "heading": "پہلے گنتی کنونشن کا انتخاب کریں۔",
            "paragraphs": [
              "پیر سے منگل تک کا قیام ایک رات پر محیط ہے لیکن کیلنڈر کی دو تاریخوں کو چھوتا ہے۔ دونوں نمبر درست ہو سکتے ہیں کیونکہ وہ مختلف سوالات کے جوابات دیتے ہیں۔ نتائج کا موازنہ کرنے سے پہلے فیصلہ کریں کہ آیا آپ گزرے ہوئے دن چاہتے ہیں یا مدت میں شامل تاریخوں کی تعداد۔",
              "بڑھتے ہوئے رینج کے لیے کیلکولیٹر کا شامل شروع کرنے کا اختیار ایک دن کا اضافہ کرتا ہے۔ اسی وجہ سے شروع اور اختتامی تاریخ صفر گزرے ہوئے دن یا ایک شامل دن دیتی ہے۔ تاریخ آغاز سے پہلے کی آخری تاریخ منفی وقفہ دیتی ہے۔ جب آپ ایک عام آگے کی مدت چاہتے ہیں تو تاریخوں کو الٹ دیں۔"
            ]
          },
          {
            "heading": "لیپ سال کی مثال کے ذریعے کام کریں۔",
            "paragraphs": [
              "2028 میں، 28 فروری سے 1 مارچ دو گزرے ہوئے دنوں پر محیط ہے کیونکہ 29 فروری ان کے درمیان آتا ہے۔ جامع گنتی تین کیلنڈر کی تاریخیں دیتی ہے: 28 فروری، 29 فروری اور 1 مارچ۔ 2027 میں، 28 فروری سے 1 مارچ تک صرف ایک گزرا ہوا دن ہوتا ہے۔",
              "یہ ٹول گھٹاؤ کے لیے درج کیلنڈر کی تاریخوں کو UTC میں معمول بناتا ہے۔ یہ دن کی روشنی کو بچانے والی گھڑی کی تبدیلی کو عام کیلنڈر ڈے کے وقفے کو جزوی دن میں تبدیل کرنے سے روکتا ہے۔ یہ پرواز کے دورانیے یا ٹائم زون کے مخصوص ٹائم اسٹیمپ کے درمیان عین اوقات کا کیلکولیٹر نہیں ہے۔"
            ],
            "table": {
              "headers": [
                "تاریخیں",
                "گزر گیا",
                "شروع سمیت"
              ],
              "rows": [
                [
                  "جنوری 1 → جنوری 11",
                  "10 دن",
                  "11 دن"
                ],
                [
                  "ایک ہی تاریخ",
                  "0 دن",
                  "1 دن"
                ],
                [
                  "28 فروری → یکم مارچ 2028",
                  "2 دن",
                  "3 دن"
                ]
              ]
            }
          },
          {
            "heading": "کیلنڈر کے دنوں کا مطلب کاروباری دن نہیں ہے۔",
            "paragraphs": [
              "ہفتہ، اتوار اور عام تعطیل سبھی کیلنڈر کے دنوں میں شمار ہوتے ہیں۔ چھٹیوں کی منصوبہ بندی کے لیے، ایک ایسا کیلکولیٹر استعمال کریں جو متعلقہ ملک کی تعطیلات اور متبادل کام کے دنوں کو جانتا ہو۔ اکیلے تاریخ کا فرق اس بات کا تعین نہیں کر سکتا کہ آپ کو کتنے ادا شدہ چھٹی والے دنوں کی ضرورت ہے۔",
              "کنٹریکٹس اور آفیشل ڈیڈ لائن پہلے دن، اختتامی دن کے کٹ آف اور چھٹیوں کی توسیع کو مختلف طریقے سے بیان کر سکتے ہیں۔ جب کوئی ڈیڈ لائن چھوٹ جائے تو گورننگ رول کو چیک کریں۔ روزمرہ کی الٹی گنتی اور سالگرہ کے لیے، نتیجہ کے ساتھ اپنی گنتی کنونشن بیان کریں۔"
            ]
          }
        ],
        "faqs": [
          {
            "question": "کیا مجھے پہلا دن شامل کرنا چاہئے؟",
            "answer": "اسے شامل کریں جب وہ تاریخ مدت کے 1 دن کے طور پر شمار ہوتی ہے۔ تاریخوں کے درمیان گزرے ہوئے فرق کی پیمائش کرتے وقت اسے چھوڑ دیں۔ ایک معاہدہ یا اتھارٹی کی طرف سے ایک اصول عام کیلنڈر کنونشن پر ترجیح لیتا ہے۔"
          },
          {
            "question": "کیا 30 دن ہمیشہ ایک مہینے کے برابر ہوتے ہیں؟",
            "answer": "نمبر۔ کیلنڈر کے مہینوں کی لمبائی مختلف ہوتی ہے۔ ہر مہینے کو 30 دنوں میں تبدیل کرنے کے بجائے اصل آغاز اور اختتامی تاریخوں کا استعمال کریں۔"
          }
        ]
      },
      "stock-average": {
        "title": "مزید حصص خریدنے کے بعد وزنی اوسط قیمت کا حساب",
        "description": "ٹیکس لاٹ الیکشن میں الجھائے بغیر نئی اوسط قیمت خرید، کل حصص اور سرمایہ کاری کی گئی رقم کا حساب لگانے کے لیے وزنی اوسط استعمال کریں۔",
        "answer": "موجودہ اور نئے حصص پر خرچ کی گئی رقم شامل کریں، پھر حصص کی کل تعداد سے تقسیم کریں۔ دو قیمتوں کی سادہ اوسط صرف اس وقت کام کرتی ہے جب حصص کی مقدار برابر ہو۔",
        "sections": [
          {
            "heading": "ہر خریداری کو اس کی مقدار کے حساب سے وزن کریں۔",
            "paragraphs": [
              "نئی اوسط خریداری کی قیمت = (موجودہ مقدار × موجودہ اوسط + نئی مقدار × نئی قیمت) ÷ کل مقدار۔ قیمتوں اور مقداروں کو ایک ہی شیئر یونٹ اور کرنسی کا استعمال کرنا چاہیے۔ جزوی حصص اس وقت استعمال کیے جا سکتے ہیں جب وہ آپ کی اصل ہولڈنگز کو ظاہر کرتے ہیں۔",
              "مثال کے طور پر، 100 حصص $50 میں خریدے گئے اور دوسرے 100 حصص $40 میں خریدے گئے جس کی کل قیمت $9,000 ہے۔ $45 حاصل کرنے کے لیے 200 شیئرز سے تقسیم کریں۔ اگر دوسری خریداری $40 میں صرف 50 حصص کی ہے، تو کل 150 حصص میں $7,000 بنتا ہے، جو تقریباً $46.67 دیتا ہے، $45 نہیں۔"
            ]
          },
          {
            "heading": "کم اوسط نقصان کو دور نہیں کرتا ہے۔",
            "paragraphs": [
              "اضافی 100 شیئرز کو $40 پر خریدنے کے فوراً بعد، 200 شیئر ہولڈنگ کی قیمت $40 فی شیئر کی مارکیٹ ویلیو $9,000 کے مقابلے میں $8,000 ہے۔ اوسط قیمت گر گئی ہے، لیکن غیر حقیقی $1,000 کا فرق باقی ہے اور سرمایہ کاری کے لیے مزید رقم سامنے آئی ہے۔",
              "$40 سے $45 کی اوسط میں منتقلی فیس سے پہلے قیمت میں 12.5% ​​اضافہ ہوگا۔ یہ ریاضی ہے، پیشن گوئی یا خریدنے کی وجہ نہیں۔ پوزیشن میں اضافہ خطرے میں رقم کے ساتھ ساتھ اوسط قیمت میں بھی تبدیلی لاتا ہے۔"
            ],
            "table": {
              "headers": [
                "ہولڈنگ",
                "شیئرز",
                "خرچ کی گئی رقم"
              ],
              "rows": [
                [
                  "موجودہ: $50/حصص",
                  "100",
                  "$5,000"
                ],
                [
                  "نیا: $40/حصص",
                  "100",
                  "$4,000"
                ],
                [
                  "مشترکہ اوسط: $45",
                  "200",
                  "$9,000"
                ]
              ]
            }
          },
          {
            "heading": "خریداری کی اوسط کو ٹیکس ریکارڈ سے الگ رکھیں",
            "paragraphs": [
              "کیلکولیٹر خریداری کے دو بلاکس کو ماڈل کرتا ہے اور اس میں بروکریج فیس، ایکسچینج ریٹ، ڈیویڈنڈ، سیلز اور کارپوریٹ ایکشن شامل نہیں ہیں۔ مختلف کرنسیوں میں کی جانے والی خریداریوں کا موازنہ کرنے سے پہلے ریکارڈ کو مستقل طور پر تبدیل کریں۔",
              "ایک حسابی ہولڈنگ اوسط قابل ٹیکس لاگت کی بنیاد کا تعین نہیں ہے۔ ٹیکس لاٹ کے قوانین اور اجازت شدہ طریقے دائرہ اختیار اور اثاثہ کے لحاظ سے مختلف ہوتے ہیں۔ اس نتیجے کو ٹیکس کی اطلاع دینے کی ہدایت کے طور پر سمجھنے کے بجائے بروکر کے اصل لین دین کا ریکارڈ رکھیں۔"
            ]
          }
        ],
        "faqs": [
          {
            "question": "کیا میں اسے زیادہ قیمت پر خریدتے وقت استعمال کرسکتا ہوں؟",
            "answer": "جی ہاں ایک ہی وزنی اوسط فارمولہ لاگو ہوتا ہے۔ آپ کی موجودہ اوسط سے زیادہ خریدنا اس میں اضافہ کرتا ہے۔ تبدیلی کا سائز نئی مقدار پر منحصر ہے۔"
          },
          {
            "question": "میرے بروکر کی اوسط مختلف کیوں ہے؟",
            "answer": "فیس، کرنسی کی تبدیلی، راؤنڈنگ، کارپوریٹ ایکشن یا بروکر کے اکاؤنٹنگ کا طریقہ اس کے اعداد و شمار میں شامل کیا جا سکتا ہے۔ یہ ٹول صرف دکھائے گئے قیمت اور مقدار کے ان پٹ استعمال کرتا ہے۔"
          }
        ]
      },
      "compound": {
        "title": "ماہانہ جمع کے ساتھ مرکب سود: فارمولا اور حل شدہ مثال",
        "description": "مؤثر سالانہ منافع، مہینے کے آخر میں شراکت اور تعاون کی رقم اور فرضی سرمایہ کاری میں اضافہ کے درمیان فرق کو سمجھیں۔",
        "answer": "مؤثر سالانہ واپسی کو ماہانہ شرح میں تبدیل کریں، موجودہ بیلنس کو بڑھائیں، پھر مہینے کا تعاون شامل کریں۔ تعاون کی رقم کو ترقی سے الگ رکھیں تاکہ زیادہ ڈپازٹ کو بہتر واپسی کے لیے غلط نہ سمجھا جائے۔",
        "sections": [
          {
            "heading": "سالانہ مفروضے کو مستقل طور پر تبدیل کریں۔",
            "paragraphs": [
              "Myeotiji سالانہ واپسی کو ایک مؤثر سالانہ شرح کے طور پر دیکھتا ہے۔ ماہانہ شرح ہے (1 + سالانہ شرح)^(1/12) − 1. 5% سالانہ پر، وہ ماہانہ شرح تقریباً 0.4074% ہے، بالکل 5% ÷ 12 نہیں۔ 12 سے تقسیم کردہ برائے نام حوالہ شدہ شرح کا استعمال ایک مختلف مرکب کنونشن کو بیان کرے گا۔",
              "ہر مہینے کے لیے، نیا بیلنس = پچھلا بیلنس × (1 + ماہانہ شرح) + شراکت۔ شراکتیں مہینے کے آخر میں شامل کی جاتی ہیں، اس لیے پہلے ڈپازٹ کی ادائیگی سے پہلے کی بجائے اگلے مہینوں میں منافع حاصل ہوتا ہے۔"
            ]
          },
          {
            "heading": "ڈپازٹس کو الگ کرکے ایک سال کی مثال دیکھیں",
            "paragraphs": [
              "$1,000 سے شروع کریں، ہر مہینے کے آخر میں $100 کا تعاون کریں اور ایک سال کے لیے مستقل 5% مؤثر سالانہ واپسی فرض کریں۔ شروع ہونے والا $1,000 بڑھ کر $1,050 ہو جاتا ہے۔ بارہ ماہانہ ڈپازٹس تقریباً $1,227.26 تک بڑھ جاتے ہیں۔ کل تقریباً $2,277.26 ہے۔",
              "آپ نے ابتدائی طور پر $2,200: $1,000 کے علاوہ بارہ $100 ڈپازٹس فراہم کیے ہیں۔ بقیہ تقریباً $77.26 ماڈلڈ نمو ہے۔ 0% واپسی کے ساتھ بیلنس بالکل $2,200 ہے۔ یہ صفر واپسی کا موازنہ اس وقت مفید ہوتا ہے جب یہ چیک کیا جائے کہ آیا ان پٹ معنی خیز ہیں۔"
            ],
            "table": {
              "headers": [
                "ایک سال کا منظر نامہ",
                "رقم فراہم کی گئی۔",
                "تخمینی توازن"
              ],
              "rows": [
                [
                  "0% سالانہ واپسی۔",
                  "$2,200",
                  "$2,200.00"
                ],
                [
                  "5% مؤثر سالانہ واپسی۔",
                  "$2,200",
                  "$2,277.26"
                ]
              ]
            }
          },
          {
            "heading": "ایک وعدہ شدہ نتائج کے بجائے منظرنامے استعمال کریں۔",
            "paragraphs": [
              "ڈپازٹس کو مستقل رکھتے ہوئے نچلے، درمیانی اور اعلیٰ مفروضوں کا موازنہ کریں۔ حقیقی سرمایہ کاری ہموار ماہانہ واپسی فراہم نہیں کرتی ہے، اور جب رقم شامل کی جاتی ہے یا نکالی جاتی ہے تو فائدے اور نقصان کی ترتیب اہمیت رکھتی ہے۔",
              "نتیجہ ٹیکس، سرمایہ کاری کے چارجز یا افراط زر میں کٹوتی نہیں کرتا ہے۔ یہ نہ تو ڈپازٹ کی قیمت ہے اور نہ ہی کسی مخصوص سرمایہ کاری کی پیشن گوئی۔ اگر کوئی بینک یا فراہم کنندہ برائے نام شرح، مختلف شراکت کا وقت یا مختلف مرکب شیڈول بتاتا ہے، تو اس ٹول کے ساتھ اس کی مثال کا موازنہ کرنے سے پہلے ان کنونشنوں کو سیدھ میں رکھیں۔"
            ]
          }
        ],
        "faqs": [
          {
            "question": "کیا ماہانہ چندہ مہینے کے شروع یا آخر میں دیا جاتا ہے؟",
            "answer": "ہر ماڈل والے مہینے کے آخر میں۔ مہینے کے آغاز کا شیڈول ہر شراکت کو ایک اضافی مہینہ ترقی دیتا ہے اور ایک مختلف توازن پیدا کر سکتا ہے۔"
          },
          {
            "question": "کیا نتیجہ میں ٹیکس یا افراط زر شامل ہے؟",
            "answer": "نہیں۔ ان اثرات سے پہلے آؤٹ پٹ ایک فرضی توازن ہے۔ برائے نام توازن اور اس کی مستقبل کی قوت خرید مختلف مقداریں ہیں۔"
          }
        ]
      },
      "unit-converter": {
        "title": "لمبائی، درجہ حرارت اور ڈیٹا کی اکائیاں کیسے تبدیل کریں",
        "description": "یو ایس بمقابلہ امپیریل والیوم، ٹمپریچر آفسیٹس اور ڈیسیمل بمقابلہ بائنری اسٹوریج یونٹس کی جانچ کرتے ہوئے عام پیمائش کو تبدیل کریں۔",
        "answer": "ایک عام بیس یونٹ کے ذریعے تبدیل کریں اور پہلے یونٹ کی تعریف کو چیک کریں۔ ایک امریکی گیلن ایک امپیریل گیلن سے مختلف ہے، اور ایک اعشاریہ گیگا بائٹ گیبی بائٹ سے مختلف ہے۔ درجہ حرارت کو بھی آفسیٹ کی ضرورت ہوتی ہے، نہ صرف ایک ضرب۔",
        "sections": [
          {
            "heading": "لمبائی، کمیت، رقبہ اور حجم تبادلوں کے عوامل کا استعمال کرتے ہیں۔",
            "paragraphs": [
              "ایک ہی جہت کی اکائیوں کے لیے، ماخذ کی مقدار کو بیس یونٹ میں تبدیل کریں اور منزل یونٹ کے عنصر سے تقسیم کریں۔ ایک میل 1.609344 کلومیٹر ہے، تو 5 میل 8.04672 کلومیٹر ہے۔ رقبہ کے عنصر کے ساتھ لمبائی کے عنصر کو الجھائیں: مربع اکائیوں کو مربع کی تبدیلی کی ضرورت ہوتی ہے۔",
              "والیوم مینو واضح طور پر امریکی مائع گیلن اور یو ایس کپ استعمال کرتا ہے۔ ایک امریکی مائع گیلن 3.785411784 لیٹر ہے۔ یہ بڑا امپیریل گیلن نہیں ہے۔ ایک نسخہ کا کپ ایک اور کنونشن کا استعمال کر سکتا ہے، لہذا نمبر لگانے سے پہلے نسخہ یا پیمائش کرنے والے برتن کو چیک کریں۔"
            ]
          },
          {
            "heading": "درجہ حرارت اور ذخیرہ عام جال ہیں۔",
            "paragraphs": [
              "سیلسیس سے فارن ہائیٹ کے لیے °F = °C × 9/5 + 32 استعمال کریں۔ ریورس کے لیے °C = (°F −32) × 5/9 استعمال کریں۔ یہی وجہ ہے کہ 100 ° F تقریباً 37.78 ° C ہے بجائے اس کے کہ صرف 100 کو 5/9 سے ضرب دے کر حاصل کیا جاتا ہے۔",
              "اعشاریہ سٹوریج یونٹ 1,000 کے اختیارات استعمال کرتے ہیں۔ بائنری یونٹس 1,024 کے اختیارات استعمال کرتے ہیں۔ یہاں 1 GB 1,000,000,000 بائٹس ہے، جبکہ 1 GiB 1,073,741,824 بائٹس ہے۔ یہ ڈیٹا کی مقدار ہیں، انٹرنیٹ کنکشن کی رفتار یا فائل کی منتقلی کے اوقات نہیں۔"
            ],
            "table": {
              "headers": [
                "ان پٹ",
                "تبدیل شدہ قدر"
              ],
              "rows": [
                [
                  "1 میل",
                  "1.609344 کلومیٹر"
                ],
                [
                  "1 امریکی مائع گیلن",
                  "3.785411784 ایل"
                ],
                [
                  "100°F",
                  "37.777…°C"
                ],
                [
                  "1 GiB",
                  "1,073,741,824 B"
                ]
              ]
            }
          },
          {
            "heading": "آخری مرحلے تک مکمل درستگی رکھیں",
            "paragraphs": [
              "ایک زمرہ منتخب کریں، ایک قدر درج کریں اور منبع اور منزل کی اکائیوں کو منتخب کریں۔ کیلکولیٹر آٹھ اعشاریہ تک دکھاتا ہے، اس لیے بہت کم مقدار کو پڑھنے کے قابل رہنے کے لیے ایک چھوٹی منزل یونٹ کی ضرورت پڑ سکتی ہے۔",
              "ضرب کرنے سے پہلے تبادلوں کے عنصر کو گول کرنا غلطی کو بڑھا سکتا ہے۔ برداشت شدہ مینوفیکچرنگ کے کام، سائنسی رپورٹنگ یا صنعت کے ایک مقررہ معیار کے لیے، مطلوبہ درستگی اور اس تناظر میں استعمال کی گئی درست تعریف کی تصدیق کریں۔"
            ]
          }
        ],
        "faqs": [
          {
            "question": "کیا میں گرام کو براہ راست ملی لیٹر میں تبدیل کر سکتا ہوں؟",
            "answer": "مواد کی کثافت کے بغیر نہیں۔ گرام ماس کی پیمائش کرتا ہے اور ملی لیٹر حجم کی پیمائش کرتا ہے۔ ان کے درمیان تبدیلی ایک عالمگیر اکائی عنصر نہیں ہے۔"
          },
          {
            "question": "کیا مینو کے گیلن کا مطلب یو کے امپیریل گیلن ہے؟",
            "answer": "نمبر۔ مینو پر US gal کا لیبل لگا ہوا ہے اور امریکی مائع گیلن استعمال کرتا ہے۔ اپنے ماخذ مواد کے لیے مطلوبہ تعریف استعمال کریں۔"
          }
        ]
      },
      "age": {
        "title": "عمر کا حساب: سالگرہ، مکمل سال اور پیدائش سے گزرے دن",
        "description": "عمر کے مکمل ہونے کا حساب لگائیں، کیلنڈر سال کے فرق سے عمر کو الگ کریں اور مقامی تاریخ اور لیپ برتھ ڈے کنونشن کو سمجھیں۔",
        "answer": "سال پیدائش کو حوالہ سال سے گھٹائیں، پھر اگر اس سال سالگرہ ابھی تک نہیں ہوئی ہے تو ایک کو گھٹائیں۔ Myeotiji حوالہ کی تاریخ کے لیے آپ کے براؤزر میں آج کی کیلنڈر کی تاریخ استعمال کرتا ہے۔",
        "sections": [
          {
            "heading": "ایک سال کا فرق ہمیشہ پوری عمر نہیں ہوتا",
            "paragraphs": [
              "31 دسمبر 2000 کو پیدا ہونے والا کوئی شخص 30 دسمبر 2026 کو 25 سال کا ہوتا ہے اور 31 دسمبر کو 26 سال کا ہوتا ہے۔ صرف ایک دن پہلے 2026 سے 2000 کو منہا کرنے سے پوری عمر ایک سے زیادہ ہو جائے گی۔",
              "پہلے مہینے اور پھر دن کا موازنہ کریں۔ اگر حوالہ کا مہینہ پیدائش کے مہینے سے پہلے کا ہے تو ایک سال کو گھٹائیں۔ اگر مہینے ملتے ہیں لیکن حوالہ کا دن پہلے کا ہے تو ایک کو بھی گھٹائیں۔ ورنہ سال کا فرق رکھیں۔"
            ]
          },
          {
            "heading": "کیلکولیٹر کے ذریعہ استعمال ہونے والی تاریخ کو سمجھیں۔",
            "paragraphs": [
              "عمر کیلکولیٹر میں تاریخ پیدائش درج کریں۔ یہ آپ کے براؤزر سے موجودہ مقامی کیلنڈر کی تاریخ کا استعمال کرتا ہے اور پیدائش کے بعد سے گزرے ہوئے کیلنڈر دنوں کی بھی اطلاع دیتا ہے۔ اس گائیڈ کے جدول میں حوالہ کی تاریخیں فکسڈ مثالیں ہیں۔ لائیو ٹول علیحدہ تاریخی-حوالہ-تاریخ فیلڈ فراہم نہیں کرتا ہے۔",
              "مختلف ٹائم زونز کے صارفین سالگرہ کے موقع پر آدھی رات کے قریب مختلف عمریں دیکھ سکتے ہیں۔ دن کی گنتی میں صحیح پیدائش کے وقت کی بجائے صرف تاریخ کے حساب کا استعمال کیا جاتا ہے۔ مستقبل کی تاریخ پیدائش ایک درست مکمل شدہ عمر کا ان پٹ نہیں ہے۔"
            ],
            "table": {
              "headers": [
                "تاریخ پیدائش",
                "مثال کے طور پر حوالہ کی تاریخ",
                "پوری عمر"
              ],
              "rows": [
                [
                  "2000-12-31",
                  "2026-12-30",
                  "25"
                ],
                [
                  "2000-12-31",
                  "2026-12-31",
                  "26"
                ],
                [
                  "2000-12-31",
                  "2027-01-01",
                  "26"
                ]
              ]
            }
          },
          {
            "heading": "لیپ ڈے اور اہلیت کے سرکاری قوانین کی دیکھ بھال کی ضرورت ہے۔",
            "paragraphs": [
              "29 فروری کی سالگرہ کے لیے، یہ ٹول مہینے اور دن کا براہ راست موازنہ کرتا ہے۔ ایک غیر لیپ سال میں اس کی مکمل سال کی گنتی 1 مارچ کو بڑھ جاتی ہے۔ یہ ایک بیان کردہ کیلکولیٹر کنونشن ہے، ہر دائرہ اختیار میں قانونی عمر کے بارے میں کوئی حکم نہیں۔",
              "داخلہ، فائدہ، انشورنس معاہدہ یا دیگر سرکاری عمل ایک مخصوص تاریخ یا سالگرہ کے خصوصی اصول پر عمر کا استعمال کر سکتا ہے۔ اس عمل کی تعریف چیک کریں۔ روزمرہ کی موجودہ عمر کا نتیجہ اس کی اہلیت کی تشخیص کی جگہ نہیں لے سکتا۔"
            ]
          }
        ],
        "faqs": [
          {
            "question": "نتیجہ کیلنڈر میں دکھائے گئے سال سے مختلف کیوں ہو سکتا ہے؟",
            "answer": "کیلنڈر سال کا گھٹاؤ نظر انداز کرتا ہے کہ آیا سالگرہ ہوئی ہے۔ مکمل شدہ عمر کی گنتی کی پیدائش کی تاریخیں اصل میں بیان کردہ تاریخ کنونشن کے تحت پہنچی ہیں۔"
          },
          {
            "question": "کیا میں اس کے بجائے گزرے ہوئے دنوں کو 365 سے تقسیم کر کے استعمال کر سکتا ہوں؟",
            "answer": "قطعی طور پر مکمل سال کی عمر کے لیے نہیں۔ لیپ سال اور سالگرہ کی پوزیشن اس شارٹ کٹ کو عمر کی حدود میں ناقابل اعتبار بناتی ہے۔"
          }
        ]
      }
    },
    "legalLabels": {
      "privacy": "رازداری اور کوکیز",
      "terms": "استعمال اور حدود",
      "contact": "رابطہ اور اصلاح",
      "notice": "عام معلومات کے لیے تخمینہ۔ یہ سروس انفرادی ٹیکس، قانونی، تنخواہ یا سرمایہ کاری کے مشورے، ریٹرن تیار کرنے، یا آپ کی نمائندگی نہیں کرتی ہے۔ کسی نتیجے پر بھروسہ کرنے سے پہلے بیان کردہ سال، مقام اور اخراج کو چیک کریں۔",
      "tracking": "Google Analytics پہلے سے فعال ہے اور صفحے کے نیچے بند کیا جا سکتا ہے۔ کیلکولیٹر کے اندراجات نہیں بھیجے جاتے۔ غیر شخصی اشتہارات کی درخواست کے لیے AdSense منسلک ہے۔ Google اور اس کے شراکت دار اشتہارات دکھانے اور ناپنے کے لیے کوکیز، ویب بیکن، IP پتے اور شناخت کنندے استعمال کر سکتے ہیں۔ غیر شخصی اشتہارات بھی کوکیز استعمال کر سکتے ہیں۔ اشتہارات کی نمائش سائٹ کی منظوری، اکاؤنٹ کی ترتیبات اور قابل اطلاق رضامندی پر منحصر ہے۔ چینی صفحات پر تجزیہ اور اشتہارات بند رہتے ہیں۔"
    },
    "legal": {
      "privacy": [
        [
          "دائرہ کار اور آپریٹر",
          "Myeotiji جنوبی کوریا سے چلائی جاتی ہے۔ یہ اطلاع اردو صفحات کے لیے ہے۔ رابطہ: contact@myeotiji.kr۔ دوسری زبانوں کے صفحات کی ترتیبات مختلف ہو سکتی ہیں۔"
        ],
        [
          "کیلکولیٹر کی معلومات",
          "حسابات آپ کے براؤزر میں چلتے ہیں۔ یہ ورژن آپریٹر ڈیٹا بیس یا تجزیاتی سروس کو کیلکولیٹر کی رقم، تنخواہ، تاریخیں یا نتائج نہیں بھیجتا ہے۔ یو آر ایل میں ذاتی ڈیٹا نہ رکھیں یا ہمیں شناختی دستاویزات، اکاؤنٹ کی تفصیلات یا پے رول ریکارڈ نہ بھیجیں۔"
        ],
        [
          "تجزیات، اشتہارات اور کوکیز",
          "Google Analytics پہلے سے فعال ہے اور صفحے کے نیچے بند کیا جا سکتا ہے۔ کیلکولیٹر کے اندراجات نہیں بھیجے جاتے۔ غیر شخصی اشتہارات کی درخواست کے لیے AdSense منسلک ہے۔ Google اور اس کے شراکت دار اشتہارات دکھانے اور ناپنے کے لیے کوکیز، ویب بیکن، IP پتے اور شناخت کنندے استعمال کر سکتے ہیں۔ غیر شخصی اشتہارات بھی کوکیز استعمال کر سکتے ہیں۔ اشتہارات کی نمائش سائٹ کی منظوری، اکاؤنٹ کی ترتیبات اور قابل اطلاق رضامندی پر منحصر ہے۔ چینی صفحات پر تجزیہ اور اشتہارات بند رہتے ہیں۔"
        ],
        [
          "ضروری ہوسٹنگ اور بیرون ملک پروسیسنگ",
          "ورسل اس ویب سائٹ کو فراہم کرتا ہے اور اس کی حفاظت کرتا ہے۔ درخواستیں لازمی طور پر کنکشن کی معلومات کو ظاہر کرتی ہیں جیسے کہ IP ایڈریس، درخواست کردہ URL، وقت، ڈیوائس/براؤزر ہیڈر اور ہوسٹنگ انفراسٹرکچر کے لیے سیکیورٹی سگنلز۔ ایسی معلومات پر آپ کے ملک سے باہر کارروائی کی جا سکتی ہے، بشمول ریاستہائے متحدہ یا انفراسٹرکچر کے دیگر مقامات۔ تجزیات کو غیر فعال کرنے سے یہ پروسیسنگ نہیں ہٹتی ہے۔ ہم اسے ڈیلیوری، سیکیورٹی اور غلطی کی تفتیش کے لیے استعمال کرتے ہیں، اشتہاری پروفائلز کے لیے نہیں۔"
        ],
        [
          "برقرار رکھنا اور آپ کے انتخاب",
          "کیلکولیٹر ان پٹس کو سرور ریکارڈ کے طور پر ہمارے پاس نہیں رکھا جاتا ہے۔ ہوسٹنگ لاگز فراہم کنندہ کی برقراری اور قابل اطلاق پروجیکٹ کی ترتیبات کی پیروی کرتے ہیں۔ ہم نے تمام انفراسٹرکچر لاگز کے لیے کسی ایک مقررہ برقراری مدت کی تصدیق نہیں کی ہے۔ قابل اطلاق تفصیلات کے لیے یا جہاں آپ کے قانون کے تحت دستیاب ہو رسائی، تصحیح، حذف یا پابندی کی درخواست کرنے کے لیے ہم سے رابطہ کریں۔ ہم درخواستوں اور قانونی استثنیٰ کا اندازہ لگاتے ہیں، اور یہ وعدہ نہیں کرتے کہ فراہم کنندہ کے تمام لاگز کو فوری طور پر حذف کیا جا سکتا ہے۔ صفحہ بند کرنے سے اس کی ان میموری حساب کی حالت صاف ہو جاتی ہے۔ آپ کا براؤزر تاریخ کو محفوظ کر سکتا ہے یا ٹیب کو بحال کر سکتا ہے۔"
        ],
        [
          "ای میل اور بیرونی لنکس",
          "اگر آپ ہمیں ای میل کرنے کا انتخاب کرتے ہیں، تو ہم درخواست کو سنبھالنے کے لیے آپ کا پتہ اور پیغام وصول کرتے ہیں اور صرف وہی چیز برقرار رکھتے ہیں جو اس مقصد یا قانونی ذمہ داریوں کے لیے درکار ہے۔ خیالی مثالیں استعمال کریں، حقیقی ذاتی مالی ریکارڈ نہیں۔ حساب کرنے کے لیے ای میل کی ضرورت نہیں ہے۔ سرکاری حوالہ جات تیسری پارٹی کی ویب سائٹس کو اپنی پالیسیوں کے ساتھ کھولتے ہیں۔ ٹریکنگ یا ڈیٹا کے استعمال میں تبدیلیوں کے لیے اس نوٹس کو اپ ڈیٹ کرنے اور ایکٹیویشن سے پہلے کسی بھی قانونی طور پر مطلوبہ انتخاب کو لاگو کرنے کی ضرورت ہوتی ہے۔"
        ]
      ],
      "terms": [
        [
          "مقصد",
          "مفت، سیلف سروس ریاضی اور عمومی وضاحتیں۔ ہم خود کو آپ کے وکیل، اکاؤنٹنٹ، ٹیکس تیار کرنے والے، پے رول فراہم کرنے والے، سرمایہ کاری کے مشیر یا سرکاری ایجنسی کے طور پر باہر نہیں رکھتے ہیں۔ کوئی پیشہ ور کلائنٹ رشتہ محض کیلکولیٹر استعمال کرنے سے نہیں بنتا۔"
        ],
        [
          "مفروضوں کو چیک کریں۔",
          "نتائج بیان کردہ سال، دائرہ اختیار اور ماڈل کے تخمینے ہیں۔ ٹیکس کی حیثیت، استثنیٰ، منصوبہ بندی کے دستاویزات، مقامی قواعد، راؤنڈنگ اور تبدیل شدہ قانون حقیقی نتائج کو تبدیل کر سکتے ہیں۔ ایک مثال ضمانت نہیں ہے۔ فائل کرنے، اجرت کی ادائیگی، سرمایہ کاری، عطیہ دینے یا سفر کی بکنگ کرنے سے پہلے متعلقہ سرکاری سروس یا اہل پیشہ ور سے تصدیق کریں۔"
        ],
        [
          "مخصوص حدود",
          "یو ایس اوور ٹائم وفاقی احاطہ شدہ غیر مستثنیٰ بیس لائن کا استعمال کرتا ہے، نہ کہ تمام ریاستی قوانین۔ گھر لے جانے کی تنخواہ ایک آسان سالانہ مثال ہے، W-4 یا فائلنگ کیلکولیشن نہیں۔ ایک 401(k) میچ ایک مخصوص بیلنس یا شراکت کی سفارش نہیں ہے۔ اسٹاک اوسط اور کمپاؤنڈ ٹولز سیکیورٹیز کی سفارش نہیں کرتے ہیں اور نہ ہی واپسی کی ضمانت دیتے ہیں۔ تاریخ اور عمر کے اوزار قانونی اہلیت یا آخری تاریخ کا فیصلہ نہیں کرتے ہیں۔"
        ],
        [
          "غلطیاں اور ذمہ داری",
          "فرضی ان پٹس اور متاثرہ URL کا استعمال کرتے ہوئے مشتبہ غلطی کی اطلاع دیں۔ جب اس کے مفروضوں کی تصدیق نہیں کی جا سکتی ہے تو ہم متاثرہ ٹول کو درست، انتباہ یا عارضی طور پر محدود کر سکتے ہیں۔ یہ نوٹس دائرہ کار کی وضاحت کرتا ہے۔ یہ ایسی ذمہ داری کو خارج نہیں کرتا ہے جسے قانونی طور پر خارج نہیں کیا جاسکتا، بشمول جان بوجھ کر بدانتظامی یا مجموعی غفلت کے لیے قابل اطلاق ذمہ داری، یا صارفین کے لازمی حقوق کو ہٹانا۔"
        ],
        [
          "سپورٹ اور تبدیلیاں",
          "سپورٹ تکنیکی خرابیوں اور عام ماخذ کی اصلاح کو ہینڈل کرتا ہے۔ انفرادی ٹیکس عہدوں، قانونی فیصلوں، فائلنگ کی تیاری یا نمائندگی کی درخواست نہ کریں۔ ہم ایسی درخواستوں کو متعلقہ اتھارٹی یا کسی مستند پیشہ ور کو بھیجیں گے۔ مواد کی تبدیلیاں صفحہ کی تاریخ میں ظاہر ہوتی ہیں۔ ہر بار مفروضوں کو دوبارہ چیک کریں۔"
        ]
      ],
      "contact": [
        [
          "تکنیکی مسائل، تصحیحات اور رازداری کی درخواستیں۔",
          "ای میل contact@myeotiji.kr صفحہ کے یو آر ایل کے ساتھ، قابل اطلاق سال/علاقہ اور ایک فرضی مثال جس میں متوقع اور ظاہر کیا گیا نتیجہ دکھایا گیا ہو۔ آپ ڈیٹا پروسیسنگ کے بارے میں معلومات کی درخواست بھی کر سکتے ہیں یا قابل اطلاق رازداری کے حقوق یہاں استعمال کر سکتے ہیں۔ ہمیں کسی اکاؤنٹ یا فارم کی ضرورت نہیں ہے۔"
        ],
        [
          "اپنی معلومات کو محفوظ رکھیں",
          "سرکاری شناخت کنندگان، بینک اکاؤنٹس، پاس ورڈ، مکمل پے سلپس یا اصل ٹیکس دستاویزات کو ای میل نہ کریں۔ ہم ذاتی ٹیکس، قانونی یا سرمایہ کاری سے متعلق مشاورت یا آپ کی طرف سے کام نہیں کرتے ہیں۔ فائلنگ، ادائیگی یا ملازمت کی آخری تاریخ کے لیے، متعلقہ اتھارٹی یا اہل پیشہ ور سے براہ راست رابطہ کریں۔"
        ]
      ]
    },
    "policy": [
      {
        "heading": "مقصد اور تصنیف",
        "text": "Myeotiji اس سائٹ پر دستیاب کیلکولیٹرز کی وضاحتیں شائع کرتا ہے۔ یہ گائیڈز AI کی مدد سے تیار کیے گئے تھے اور حساب کے بیان کردہ طریقہ، کام کی مثالوں اور حوالہ جات کے خلاف جانچ پڑتال کی گئی تھی۔ مصنف کا نام Myeotiji کو اشاعتی خدمت کے طور پر شناخت کرتا ہے۔ یہ کسی نامزد اکاؤنٹنٹ، وکیل یا ریگولیٹڈ ایڈوائزر کے جائزے کا دعوی نہیں کرتا ہے۔"
      },
      {
        "heading": "ذرائع، تاریخیں اور قابل اطلاق قواعد",
        "text": "قانون، ٹیکس، پے رول اور سماجی-انشورنس کے موضوعات کے لیے، ہم ذمہ دار پبلک اتھارٹی کی اشاعتوں اور متعلقہ دستاویزات سے لنک کو ترجیح دیتے ہیں۔ فراہم کنندہ کی شرائط اور تکنیکی معیارات کی شناخت اس طرح کی گئی ہے۔ مییوتی جی کی لکھی گئی ایک ریاضی کی مثال ایک مثال ہے، نہ کہ کسی اتھارٹی کا حوالہ۔ نظر آنے والی تازہ کاری کی تاریخ مواد کے مواد کے جائزے کو ریکارڈ کرتی ہے، نہ کہ خودکار یومیہ ریفریش۔ ہر گائیڈ کے معاملے میں ملک، سال اور اخراجات بیان کیے گئے ہیں۔"
      },
      {
        "heading": "ایک حساب کتاب کیا قائم کرسکتا ہے اور کیا نہیں کرسکتا",
        "text": "ہم نمائندہ عددی مثالوں اور حدود کے حالات کو چیک کرتے ہیں۔ سادہ ماڈل اب بھی حقائق کو چھوڑ دیتے ہیں جو اصل ادائیگی یا حقدار کو تبدیل کر سکتے ہیں۔ فرضی سرمایہ کاری میں اضافہ ایک وعدہ شدہ واپسی نہیں ہے، اور پے رول کا تخمینہ ٹیکس کی حتمی تشخیص نہیں ہے۔ مثالیں دکھائے گئے مفروضوں کا استعمال کرتی ہیں۔ قارئین کو نتیجہ خیز فیصلے کے لیے کسی اعداد و شمار پر انحصار کرنے سے پہلے حقیقی فراہم کنندہ، آجر یا اتھارٹی کے ریکارڈ کی تصدیق کرنی چاہیے۔"
      },
      {
        "heading": "تصحیح اور آراء",
        "text": "اگر آپ کو کوئی غلط فارمولہ، ماخذ، ترجمہ یا مثال ملتی ہے، تو براہ کرم صفحہ کا پتہ، متعلقہ معلومات اور نتیجہ بھیجیں جس کی آپ کو توقع ہے ہمارے رابطے کے پتے پر۔ شناختی دستاویزات، مکمل تنخواہ کے گوشوارے، اکاؤنٹ نمبر یا دیگر غیر ضروری ذاتی معلومات نہ بھیجیں۔ ہم وضاحت کی چھان بین اور اپ ڈیٹ کرنے کے لیے ایک قابل تولید مثال استعمال کر سکتے ہیں۔"
      }
    ]
  },
  "vi": {
    "labels": {
      "home": "Máy tính",
      "guides": "Hướng dẫn tính toán",
      "policy": "Cách chúng tôi chuẩn bị những hướng dẫn này",
      "title": "Hướng dẫn tính toán: Công thức & Ví dụ thực hiện",
      "description": "Tính toán thực tế cho ngày tháng, tiền bạc và các quyết định hàng ngày. Chọn một máy tính và xem công thức đằng sau câu trả lời.",
      "intro": "Bắt đầu với câu hỏi bạn muốn trả lời. Mỗi hướng dẫn sẽ giải thích phương pháp, thực hiện thông qua các con số và liên kết đến máy tính mà bạn có thể sử dụng với thông tin đầu vào của riêng mình.",
      "global": "Tiền, ngày tháng và tính toán hàng ngày",
      "country": "Hoa Kỳ: lương, thuế và hưu trí",
      "quick": "Trả lời nhanh",
      "contents": "Trên trang này",
      "try": "Hãy thử máy tính",
      "related": "Hướng dẫn liên quan",
      "questions": "Câu hỏi thường gặp",
      "references": "Nguồn và đọc thêm",
      "updated": "Đã cập nhật",
      "author": "Chuẩn bị bởi Myeotiji",
      "exampleNote": "Các ví dụ minh họa các giả định đã nêu. Phí thực tế, tiền lãi và số tiền trả lương có thể khác nhau.",
      "policyTitle": "Hướng dẫn tính toán Myeotiji: Nguồn & Phương pháp biên tập",
      "policyDescription": "Cách Myeotiji giải thích các phép tính, kiểm tra ví dụ, trích dẫn nguồn và xử lý các chỉnh sửa và ước tính.",
      "calculatorLink": "Xem công thức, ví dụ thực tế và các lỗi thường gặp →",
      "homeTitle": "Máy tính tài chính và hàng ngày miễn phí | myeotiji",
      "homeHeading": "Máy tính miễn phí về tiền bạc, công việc và cuộc sống hàng ngày",
      "homeDescription": "Tính toán thực tế cho ngày tháng, tiền bạc và các quyết định hàng ngày. Chọn một máy tính và xem công thức đằng sau câu trả lời."
    },
    "guides": {
      "fee": {
        "title": "Cách tính phí: cần thu bao nhiêu để nhận đủ số tiền mong muốn?",
        "description": "Tính số tiền thu được ròng sau tỷ lệ phần trăm và phí cố định, sau đó đảo ngược công thức để tìm khoản phí cần thiết cho khoản thanh toán mục tiêu.",
        "answer": "Trừ cả phí phần trăm và phí cố định khỏi khoản phí. Để nhận được một số tiền cụ thể sau phí, hãy chia mục tiêu cộng với phí cố định cho một trừ đi tỷ lệ phần trăm.",
        "sections": [
          {
            "heading": "Tách riêng hai phần phí",
            "paragraphs": [
              "Phí phần trăm tăng theo số tiền thu được; một khoản phí giao dịch cố định thì không. Viết phần trăm dưới dạng số thập phân trước khi nhân. Đối với mức phí giả định là 3%, hãy sử dụng 0,03. Khoản phí cố định 0,30 có nghĩa là 30 xu bằng loại tiền bạn đã chọn, không phải một tỷ lệ phần trăm khác.",
              "Số tiền thu được ròng = phí × (1 - lãi suất) - phí cố định. Kiểm tra số tiền mà nhà cung cấp áp dụng mức giá của mình: phí vận chuyển, thuế, chuyển đổi tiền tệ và phí xuyên biên giới có thể được xử lý riêng. Hướng dẫn này mô tả số học chứ không phải biểu giá hiện hành của bất kỳ nhà cung cấp nào.",
              "Tiền thực nhận = số tiền thu × (1 − tỷ lệ phí) − phí cố định. Số tiền cần thu = (tiền thực nhận mong muốn + phí cố định) ÷ (1 − tỷ lệ phí)."
            ]
          },
          {
            "heading": "A worked example: why adding 3% is not enough",
            "paragraphs": [
              "Giả sử bạn thu được 100 đô la và phí giả định là 3% cộng với 0,30 đô la. The percentage part is $3; việc thêm phần cố định sẽ tính phí 3,30 đô la và số tiền thu được là 96,70 đô la.",
              "Để nhận được 100 USD ròng, hãy tính phí × 0,97 − 0,30 = 100. Phí không làm tròn bắt buộc là 100,30 0,97, khoảng 103,4021 USD. Thêm 3% vào 100 đô la sẽ mang lại 103 đô la, số tiền ròng chỉ là 99,61 đô la. Sự khác biệt phát sinh do nhà cung cấp cũng tính phí theo mức phí tăng thêm."
            ],
            "table": {
              "headers": [
                "Tính phí",
                "Phí giả định",
                "mạng lưới"
              ],
              "rows": [
                [
                  "$100,00",
                  "$3,30",
                  "$96,70"
                ],
                [
                  "$103,00",
                  "3,39 USD",
                  "99,61 USD"
                ],
                [
                  "$103,40",
                  "$3,402 trước khi làm tròn",
                  "99,998 USD trước khi làm tròn"
                ]
              ]
            }
          },
          {
            "heading": "Use the result as a pricing check",
            "paragraphs": [
              "Nhập số tiền thu được để tính toán chuyển tiếp hoặc chọn chế độ mạng mục tiêu để tính toán ngược lại. Giữ loại tiền đã chọn phù hợp với mức phí cố định của bạn. Currency selection changes formatting; it does not perform an exchange-rate conversion.",
              "The screen rounds the result for display. Nếu khoản thanh toán tối thiểu phải được đáp ứng chính xác, hãy kiểm tra mức tăng tiền tệ nhỏ nhất tiếp theo và quy tắc làm tròn của nhà cung cấp của bạn. Việc hoàn tiền, phí tối thiểu, thuế đối với phí và liệu các khoản phụ phí có được phép hay không đều cần được kiểm tra riêng."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Có phải phí 0% luôn có nghĩa là tôi nhận được toàn bộ khoản phí phải không?",
            "answer": "Chỉ khi phí cố định cũng bằng 0 và không áp dụng khoản khấu trừ nào khác. Phí phần trăm 0% cộng với khoản phí cố định 0,30 USD vẫn còn 99,70 USD từ khoản phí 100 USD."
          },
          {
            "question": "Can I compare different payment providers?",
            "answer": "Có, nhập mức phí được công bố và phí cố định của từng nhà cung cấp với cùng một khoản phí. So sánh kết quả với bất kỳ khoản phí bổ sung nào và các điều khoản áp dụng cho tài khoản của bạn."
          }
        ]
      },
      "discount": {
        "title": "Giảm 20% rồi 10%: vì sao tổng mức giảm là 28%?",
        "description": "Tính toán các khoản giảm giá liên tiếp, so sánh các kết hợp phiếu giảm giá và phân biệt tỷ lệ phần trăm giá cuối cùng với số tiền đã tiết kiệm.",
        "answer": "Áp dụng chiết khấu thứ hai cho giá đã giảm. Giảm giá 20%, tiếp theo là giảm giá 10% để lại 80% × 90% = 72% giá ban đầu, do đó tổng số tiền tiết kiệm được là 28%.",
        "sections": [
          {
            "heading": "Multiply the price you keep paying",
            "paragraphs": [
              "Đối với mỗi phần trăm giảm giá, hãy trừ đi tỷ lệ thập phân từ một. Nhân giá gốc với các phân số còn lại. Với hai lần giảm giá, giá cuối cùng = ban đầu × (1 − mức đầu tiên) × (1 − mức thứ hai). Chiết khấu thực tế = 1 − Giá cuối cùng  giá gốc.",
              "Việc thêm các mức giá sẽ coi cả hai khoản giảm giá đều được áp dụng cho giá gốc. That is a different offer. Một cửa hàng hứa giảm giá 30% một lần sẽ đưa ra mức giảm phần trăm lớn hơn mức giảm 20% và 10% liên tiếp, trước khi các điều khoản khác được xem xét."
            ]
          },
          {
            "heading": "Compare two offers on a $100 item",
            "paragraphs": [
              "Sau lần giảm 20% đầu tiên, mặt hàng này có giá 80 USD. Lần giảm 10% thứ hai loại bỏ 8 đô la, còn lại 72 đô la. Tổng số tiền tiết kiệm được là $28. Đảo ngược thứ tự của hai lần giảm giá theo phần trăm thuần túy sẽ cho kết quả toán học tương tự vì các yếu tố giá còn lại sẽ nhân lên.",
              "Quy tắc đặt hàng đó không tự động mở rộng sang phiếu giảm giá có giá trị cố định. Một phiếu giảm giá 10 USD sau khi giảm giá 20% cho một mặt hàng trị giá 100 USD sẽ mang lại 70 USD. Giảm 10 đô la trước và sau đó áp dụng 20% ​​sẽ mang lại 72 đô la. Mức chi tiêu tối thiểu, giới hạn và các sản phẩm bị loại trừ có thể thay đổi ưu đãi nào thực sự có thể được sử dụng."
            ],
            "table": {
              "headers": [
                "ưu đãi",
                "Giá cuối cùng",
                "Đang lưu"
              ],
              "rows": [
                [
                  "20%, rồi 10%",
                  "$72",
                  "28%"
                ],
                [
                  "Một giảm giá 30%",
                  "$70",
                  "30%"
                ],
                [
                  "20%, sau đó là phiếu giảm giá $10",
                  "$70",
                  "$30"
                ]
              ]
            }
          },
          {
            "heading": "Nhập mức giảm được quảng cáo, không phải giá còn lại",
            "paragraphs": [
              "Các trường của máy tính lấy phần trăm chiết khấu. Nhãn ghi thanh toán 80% giá ban đầu có nghĩa là giảm giá 20%. Thay vào đó, nhập 80 sẽ tính giảm 80%.",
              "Công cụ này mô hình hóa hai lần giảm phần trăm liên tiếp. Nó không thêm thuế bán hàng, giao hàng, hoàn lại tiền hoặc phiếu giảm giá cố định. So sánh tổng số tiền thanh toán khi các mặt hàng đó khác nhau và cho phép làm tròn thực tế của người bán ở mỗi bước."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Giảm 50% rồi sau đó giảm 50% có miễn phí không?",
            "answer": "Không. Một nửa giá ban đầu vẫn còn sau lần giảm đầu tiên và một nửa số đó còn lại sau lần giảm thứ hai. Bạn trả 25% giá gốc, tiết kiệm 75%."
          },
          {
            "question": "Tại sao số tiền tiết kiệm trên biên lai của tôi hơi khác một chút?",
            "answer": "Nhà bán lẻ có thể làm tròn từng mặt hàng hoặc từng khoản giảm giá riêng biệt hoặc áp dụng giảm giá cho các số tiền đủ điều kiện khác nhau. Máy tính này sử dụng hai tỷ lệ phần trăm đã nêu trước khi hiển thị kết quả làm tròn."
          }
        ]
      },
      "days": {
        "title": "Số ngày giữa hai ngày: tính ngày đầu và năm nhuận thế nào?",
        "description": "Hiểu số ngày đã trôi qua so với số ngày bao gồm, ngày nhuận, ngày cuối tuần và lý do tại sao công cụ tính ngày theo lịch lại khác với công cụ tính thời hạn.",
        "answer": "Đối với những ngày theo lịch đã trôi qua, hãy trừ ngày bắt đầu khỏi ngày kết thúc. Nếu ngày bắt đầu là ngày 1, hãy thêm một ngày cho phạm vi ngày chuyển tiếp. Từ ngày 1 tháng 1 đến ngày 11 tháng 1 là 10 ngày trôi qua hoặc bao gồm 11 ngày.",
        "sections": [
          {
            "heading": "Chọn quy ước đếm trước",
            "paragraphs": [
              "Thời gian lưu trú từ thứ Hai đến thứ Ba kéo dài một đêm nhưng chạm tới hai ngày theo lịch. Cả hai con số đều có thể đúng vì chúng trả lời các câu hỏi khác nhau. Quyết định xem bạn muốn số ngày đã trôi qua hay số ngày được bao gồm trong một khoảng thời gian trước khi so sánh kết quả.",
              "Đối với phạm vi tăng dần, tùy chọn bao gồm bắt đầu của máy tính sẽ thêm một ngày. Do đó, ngày bắt đầu và ngày kết thúc giống nhau sẽ cho ra 0 ngày trôi qua hoặc một ngày trọn vẹn. Ngày kết thúc trước ngày bắt đầu sẽ có khoảng thời gian âm; đảo ngược ngày khi bạn muốn có một khoảng thời gian chuyển tiếp bình thường."
            ]
          },
          {
            "heading": "Làm việc thông qua một ví dụ về năm nhuận",
            "paragraphs": [
              "Năm 2028, ngày 28 tháng 2 đến ngày 1 tháng 3 kéo dài hai ngày vì ngày 29 tháng 2 nằm giữa hai ngày đó. Việc tính toàn diện đưa ra ba ngày theo lịch: ngày 28 tháng 2, ngày 29 tháng 2 và ngày 1 tháng 3. Vào năm 2027, ngày 28 tháng 2 đến ngày 1 tháng 3 chỉ kéo dài một ngày trôi qua.",
              "Công cụ này chuẩn hóa các ngày dương lịch đã nhập thành UTC để trừ. Điều này ngăn việc thay đổi đồng hồ tiết kiệm ánh sáng ban ngày biến khoảng thời gian theo lịch thông thường thành ngày phân số. Đây không phải là công cụ tính toán thời lượng chuyến bay hoặc số giờ chính xác giữa các dấu thời gian theo múi giờ cụ thể."
            ],
            "table": {
              "headers": [
                "Ngày",
                "Đã qua",
                "Bao gồm cả bắt đầu"
              ],
              "rows": [
                [
                  "Ngày 1 tháng 1 → ngày 11 tháng 1",
                  "10 ngày",
                  "11 ngày"
                ],
                [
                  "Cùng ngày",
                  "0 ngày",
                  "1 ngày"
                ],
                [
                  "28 tháng 2 → 1 tháng 3 năm 2028",
                  "2 ngày",
                  "3 ngày"
                ]
              ]
            }
          },
          {
            "heading": "Ngày dương lịch không có nghĩa là ngày làm việc",
            "paragraphs": [
              "Thứ bảy, chủ nhật và các ngày lễ đều được tính là ngày dương lịch. Để lập kế hoạch nghỉ phép, hãy sử dụng máy tính biết ngày nghỉ lễ và ngày làm việc thay thế của quốc gia liên quan. Chỉ riêng sự khác biệt về ngày không thể xác định số ngày nghỉ phép được trả lương mà bạn cần.",
              "Hợp đồng và thời hạn chính thức có thể xác định ngày đầu tiên, thời hạn cuối ngày và thời gian gia hạn kỳ nghỉ một cách khác nhau. Kiểm tra quy tắc quản lý khi thời hạn bị bỏ lỡ có vấn đề. Đối với việc đếm ngược hàng ngày và ngày kỷ niệm, hãy nêu quy ước đếm của bạn cùng với kết quả."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Tôi có nên bao gồm ngày đầu tiên?",
            "answer": "Bao gồm nó khi ngày đó được tính là ngày đầu tiên của kỳ kinh. Hãy loại trừ nó khi đo khoảng cách đã trôi qua giữa các ngày. Quy tắc từ hợp đồng hoặc cơ quan có thẩm quyền được ưu tiên hơn quy ước về lịch chung."
          },
          {
            "question": "Có phải 30 ngày luôn bằng một tháng?",
            "answer": "No. Calendar months have different lengths. Sử dụng ngày bắt đầu và ngày kết thúc thực tế thay vì chuyển đổi hàng tháng thành 30 ngày."
          }
        ]
      },
      "stock-average": {
        "title": "Cách tính giá vốn trung bình sau khi mua thêm cổ phiếu",
        "description": "Sử dụng mức trung bình có trọng số để tính giá mua trung bình mới, tổng số cổ phần và số tiền đầu tư mà không nhầm lẫn với cuộc bầu cử lô thuế.",
        "answer": "Cộng số tiền chi cho cổ phiếu hiện có và cổ phiếu mới, sau đó chia cho tổng số cổ phiếu. Trung bình đơn giản của hai mức giá chỉ hoạt động khi số lượng cổ phiếu bằng nhau.",
        "sections": [
          {
            "heading": "Weight each purchase by its quantity",
            "paragraphs": [
              "Giá mua trung bình mới = (số lượng hiện có × số lượng trung bình hiện có + số lượng mới × giá mới) / tổng số lượng. Giá và số lượng phải sử dụng cùng đơn vị chia sẻ và đồng tiền. Cổ phiếu phân số có thể được sử dụng khi chúng phản ánh số cổ phần thực tế của bạn.",
              "Ví dụ: 100 cổ phiếu được mua với giá 50 đô la và 100 cổ phiếu khác được mua với giá 40 đô la có tổng giá trị là 9.000 đô la. Divide by 200 shares to get $45. Nếu lần mua thứ hai chỉ là 50 cổ phiếu với giá 40 đô la, thì tổng số tiền sẽ là 7.000 đô la cho 150 cổ phiếu, mang lại khoảng 46,67 đô la chứ không phải 45 đô la."
            ]
          },
          {
            "heading": "Mức trung bình thấp hơn không loại bỏ được khoản lỗ",
            "paragraphs": [
              "Ngay sau khi mua thêm 100 cổ phiếu với giá 40 đô la, 200 cổ phiếu trị giá 40 đô la một cổ phiếu có giá trị thị trường là 8.000 đô la so với 9.000 đô la chi tiêu. Giá trung bình đã giảm, nhưng vẫn còn chênh lệch 1.000 đô la chưa thực hiện và sẽ có nhiều tiền hơn để đầu tư.",
              "Việc chuyển từ mức 40 USD lên mức trung bình 45 USD sẽ làm giá tăng 12,5% trước phí. Đó là số học, không phải là dự báo hay lý do để mua. Việc tăng vị thế sẽ làm thay đổi số tiền chịu rủi ro cũng như giá trung bình."
            ],
            "table": {
              "headers": [
                "nắm giữ",
                "Chia sẻ",
                "Số tiền chi tiêu"
              ],
              "rows": [
                [
                  "Hiện tại: $50/cổ phiếu",
                  "100",
                  "5.000 USD"
                ],
                [
                  "Mới: $40/cổ phiếu",
                  "100",
                  "4.000 USD"
                ],
                [
                  "Trung bình kết hợp: $45",
                  "200",
                  "9.000 USD"
                ]
              ]
            }
          },
          {
            "heading": "Keep purchase averages separate from tax records",
            "paragraphs": [
              "Máy tính mô hình hai khối mua hàng và không bao gồm phí môi giới, tỷ giá hối đoái, cổ tức, doanh thu và hoạt động của công ty. Chuyển đổi hồ sơ một cách nhất quán trước khi so sánh các giao dịch mua được thực hiện bằng các loại tiền tệ khác nhau.",
              "Giá trị trung bình số học không phải là cơ sở để xác định cơ sở chi phí chịu thuế. Các quy tắc về lô thuế và phương pháp được phép khác nhau tùy theo khu vực pháp lý và tài sản. Giữ hồ sơ giao dịch ban đầu của người môi giới thay vì coi kết quả này là hướng dẫn báo cáo thuế."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Can I use it when buying at a higher price?",
            "answer": "Đúng. Công thức trung bình có trọng số tương tự được áp dụng. Buying above your existing average increases it; quy mô của sự thay đổi phụ thuộc vào số lượng mới."
          },
          {
            "question": "Why is my broker's average different?",
            "answer": "Phí, chuyển đổi tiền tệ, làm tròn, hoạt động của công ty hoặc phương pháp kế toán của nhà môi giới có thể được bao gồm trong số liệu của nó. Công cụ này chỉ sử dụng thông tin đầu vào về giá và số lượng được hiển thị."
          }
        ]
      },
      "compound": {
        "title": "Lãi kép với tiền gửi hằng tháng: công thức và ví dụ",
        "description": "Hiểu lợi nhuận hiệu quả hàng năm, các khoản đóng góp cuối tháng và sự khác biệt giữa số tiền đóng góp và mức tăng trưởng đầu tư giả định.",
        "answer": "Chuyển đổi lợi nhuận thực tế hàng năm thành tỷ lệ hàng tháng, tăng số dư hiện có, sau đó thêm khoản đóng góp của tháng. Giữ tiền đóng góp tách biệt với tăng trưởng để khoản tiền gửi lớn hơn không bị nhầm lẫn với lợi nhuận tốt hơn.",
        "sections": [
          {
            "heading": "Convert the annual assumption consistently",
            "paragraphs": [
              "Myeotiji coi lợi nhuận hàng năm là tỷ lệ hiệu quả hàng năm. Lãi suất hàng tháng là (1 + lãi suất hàng năm)^(1/12) − 1. Ở mức 5% hàng năm, lãi suất hàng tháng đó là khoảng 0,4074%, không chính xác là 5% `12. Sử dụng lãi suất niêm yết danh nghĩa chia cho 12 sẽ mô tả một quy ước gộp khác.",
              "Đối với mỗi tháng, số dư mới = số dư trước đó × (1 + lãi suất hàng tháng) + khoản đóng góp. Các khoản đóng góp được thêm vào cuối tháng, do đó khoản tiền gửi đầu tiên sẽ kiếm được tiền lãi trong các tháng tiếp theo thay vì trước khi được thanh toán."
            ]
          },
          {
            "heading": "Kiểm tra ví dụ một năm bằng cách tách tiền gửi",
            "paragraphs": [
              "Bắt đầu với 1.000 đô la, đóng góp 100 đô la vào cuối mỗi tháng và giả định lợi nhuận hàng năm hiệu quả không đổi 5% trong một năm. Số tiền ban đầu là 1.000 USD tăng lên thành 1.050 USD; mười hai khoản tiền gửi hàng tháng tăng lên khoảng $1.227,26. Tổng số tiền là khoảng $ 2,277,26.",
              "Bạn đã cung cấp 2.200 đô la: ban đầu là 1.000 đô la cộng với 12 khoản tiền gửi 100 đô la. Khoảng 77,26 USD còn lại là mức tăng trưởng theo mô hình. Với mức hoàn trả 0%, số dư chính xác là 2.200 USD. Sự so sánh lợi nhuận bằng 0 này rất hữu ích khi kiểm tra xem đầu vào có hợp lý hay không."
            ],
            "table": {
              "headers": [
                "Kịch bản một năm",
                "Tiền cung cấp",
                "Số dư ước tính"
              ],
              "rows": [
                [
                  "Lợi nhuận hàng năm 0%",
                  "2.200 USD",
                  "$2.200,00"
                ],
                [
                  "Lợi nhuận hàng năm hiệu quả 5%",
                  "2.200 USD",
                  "2.277,26 USD"
                ]
              ]
            }
          },
          {
            "heading": "Sử dụng các kịch bản thay vì một kết quả đã hứa",
            "paragraphs": [
              "So sánh các giả định thấp hơn, trung bình và cao hơn trong khi giữ tiền gửi không đổi. Các khoản đầu tư thực sự không mang lại lợi nhuận suôn sẻ hàng tháng và thứ tự lãi và lỗ rất quan trọng khi tiền được thêm vào hoặc rút ra.",
              "Kết quả không khấu trừ thuế, phí đầu tư hoặc lạm phát. Đây không phải là báo giá tiền gửi hay dự báo về một khoản đầu tư cụ thể. Nếu ngân hàng hoặc nhà cung cấp đưa ra lãi suất danh nghĩa, thời điểm đóng góp khác hoặc lịch trình gộp khác, hãy điều chỉnh các quy ước đó trước khi so sánh minh họa của nó với công cụ này."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Khoản đóng góp hàng tháng được thực hiện vào đầu hay cuối tháng?",
            "answer": "Vào cuối mỗi tháng theo mô hình. Lịch trình đầu tháng giúp mỗi khoản đóng góp có thêm một tháng tăng trưởng và có thể tạo ra sự cân bằng khác nhau."
          },
          {
            "question": "Kết quả có bao gồm thuế hay lạm phát không?",
            "answer": "Không. Đầu ra là một sự cân bằng giả định trước những hiệu ứng đó. Số dư danh nghĩa và sức mua trong tương lai của nó là những đại lượng khác nhau."
          }
        ]
      },
      "unit-converter": {
        "title": "Cách đổi đơn vị độ dài, nhiệt độ và dung lượng dữ liệu",
        "description": "Chuyển đổi các phép đo phổ biến trong khi kiểm tra thể tích US so với hệ Anh, độ lệch nhiệt độ và đơn vị lưu trữ thập phân so với nhị phân.",
        "answer": "Chuyển đổi thông qua một đơn vị cơ sở chung và kiểm tra định nghĩa đơn vị trước. Một gallon Mỹ khác với một gallon Anh, và một gigabyte thập phân khác với một gibibyte. Nhiệt độ cũng cần một sự bù đắp, không chỉ là một hệ số nhân.",
        "sections": [
          {
            "heading": "Hệ số chuyển đổi sử dụng chiều dài, khối lượng, diện tích và thể tích",
            "paragraphs": [
              "Đối với các đơn vị có cùng kích thước, hãy quy đổi số lượng nguồn thành đơn vị cơ sở và chia cho hệ số của đơn vị đích. Một dặm là 1,609344 km, vậy 5 dặm là 8,04672 km. Đừng nhầm lẫn hệ số chiều dài với hệ số diện tích: đơn vị bình phương yêu cầu chuyển đổi bình phương.",
              "Menu âm lượng rõ ràng sử dụng gallon chất lỏng và cốc Mỹ. Một gallon chất lỏng của Mỹ là 3,785411784 lít; nó không phải là gallon đế quốc lớn hơn. Cốc của công thức nấu ăn có thể sử dụng quy ước khác, vì vậy hãy kiểm tra công thức hoặc bình đo trước khi áp dụng số."
            ]
          },
          {
            "heading": "Nhiệt độ và lưu trữ là những cái bẫy phổ biến",
            "paragraphs": [
              "Đối với độ C đến độ F, hãy sử dụng °F = °C × 9/5 + 32. Đối với trường hợp ngược lại, hãy sử dụng °C = (°F − 32) × 5/9. Đó là lý do tại sao 100°F xấp xỉ 37,78°C chứ không phải là kết quả thu được chỉ bằng cách nhân 100 với 5/9.",
              "Đơn vị lưu trữ thập phân sử dụng lũy ​​thừa 1.000; đơn vị nhị phân sử dụng lũy ​​thừa 1.024. Ở đây 1 GB là 1.000.000.000 byte, trong khi 1 GiB là 1.073.741.824 byte. Đây là số lượng dữ liệu, không phải tốc độ kết nối internet hoặc thời gian truyền tệp."
            ],
            "table": {
              "headers": [
                "đầu vào",
                "Giá trị được chuyển đổi"
              ],
              "rows": [
                [
                  "1 dặm",
                  "1,609344 km"
                ],
                [
                  "1 gallon chất lỏng của Mỹ",
                  "3.785411784 L"
                ],
                [
                  "100°F",
                  "37,777…°C"
                ],
                [
                  "1 GiB",
                  "1.073.741.824 B"
                ]
              ]
            }
          },
          {
            "heading": "Giữ độ chính xác đầy đủ cho đến bước cuối cùng",
            "paragraphs": [
              "Chọn một danh mục, nhập giá trị và chọn đơn vị nguồn và đích. Máy tính hiển thị tối đa tám chữ số thập phân, do đó, một số lượng rất nhỏ có thể cần đơn vị đích nhỏ hơn để vẫn có thể đọc được.",
              "Làm tròn hệ số chuyển đổi trước khi nhân có thể làm tăng sai số. Đối với công việc sản xuất có dung sai cho phép, báo cáo khoa học hoặc tiêu chuẩn ngành quy định, hãy xác minh độ chính xác cần thiết và định nghĩa chính xác được sử dụng trong bối cảnh đó."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Tôi có thể chuyển đổi gam trực tiếp sang mililít không?",
            "answer": "Không phải không có mật độ của vật liệu. Gam đo khối lượng và mililit đo thể tích; sự chuyển đổi giữa chúng không phải là hệ số đơn vị phổ quát."
          },
          {
            "question": "Gallon của thực đơn có nghĩa là gallon của Anh phải không?",
            "answer": "Không. Thực đơn được dán nhãn US gal và sử dụng gallon chất lỏng của Hoa Kỳ. Sử dụng định nghĩa được yêu cầu bởi tài liệu nguồn của bạn."
          }
        ]
      },
      "age": {
        "title": "Cách tính tuổi: sinh nhật, số năm tròn và số ngày đã sống",
        "description": "Tính số tuổi tròn, phân biệt tuổi với sự khác biệt trong năm dương lịch và hiểu các quy ước về ngày địa phương và ngày sinh nhuận.",
        "answer": "Trừ năm sinh khỏi năm tham chiếu, sau đó trừ đi một nếu năm đó chưa có sinh nhật. Myeotiji sử dụng ngày dương lịch hôm nay trong trình duyệt của bạn làm ngày tham chiếu.",
        "sections": [
          {
            "heading": "Chênh lệch một năm không phải lúc nào cũng là tuổi trọn vẹn",
            "paragraphs": [
              "Một người sinh ngày 31 tháng 12 năm 2000 sẽ là 25 tuổi vào ngày 30 tháng 12 năm 2026 và tròn 26 tuổi vào ngày 31 tháng 12. Chỉ cần trừ 2000 khỏi năm 2026 một ngày trước đó sẽ phóng đại một độ tuổi hoàn thành.",
              "So sánh tháng đầu tiên và sau đó là ngày. Nếu tháng tham chiếu sớm hơn tháng sinh thì trừ đi một năm. Nếu các tháng trùng nhau nhưng ngày tham chiếu sớm hơn, hãy trừ đi một. Nếu không thì giữ chênh lệch năm."
            ]
          },
          {
            "heading": "Hiểu ngày mà máy tính sử dụng",
            "paragraphs": [
              "Nhập ngày sinh vào máy tính tuổi. Nó sử dụng ngày dương lịch địa phương hiện tại từ trình duyệt của bạn và cũng báo cáo những ngày dương lịch đã trôi qua kể từ khi sinh ra. Ngày tham chiếu trong bảng hướng dẫn này là những minh họa cố định; công cụ trực tiếp không cung cấp trường ngày tham chiếu lịch sử riêng biệt.",
              "Người dùng ở các múi giờ khác nhau có thể thấy các độ tuổi khác nhau vào khoảng nửa đêm của ngày sinh nhật. Việc đếm ngày chỉ sử dụng số học theo ngày thay vì giờ sinh chính xác. Ngày sinh trong tương lai không phải là thông tin nhập về độ tuổi hợp lệ."
            ],
            "table": {
              "headers": [
                "Ngày sinh",
                "Ngày tham chiếu trong ví dụ",
                "Tuổi hoàn thành"
              ],
              "rows": [
                [
                  "2000-12-31",
                  "2026-12-30",
                  "25"
                ],
                [
                  "2000-12-31",
                  "2026-12-31",
                  "26"
                ],
                [
                  "2000-12-31",
                  "2027-01-01",
                  "26"
                ]
              ]
            }
          },
          {
            "heading": "Các quy định về ngày nhuận và tính đủ điều kiện chính thức cần được quan tâm",
            "paragraphs": [
              "Đối với sinh nhật ngày 29 tháng 2, công cụ này so sánh trực tiếp tháng và ngày. Trong một năm không nhuận, số năm hoàn thành của nó tăng lên vào ngày 1 tháng 3. Đó là một quy ước tính toán đã nêu, không phải là phán quyết về độ tuổi hợp pháp ở mọi khu vực pháp lý.",
              "Việc nhập học, quyền lợi, hợp đồng bảo hiểm hoặc quy trình chính thức khác có thể sử dụng độ tuổi vào một ngày cụ thể hoặc quy tắc sinh nhật đặc biệt. Kiểm tra định nghĩa của quá trình đó. Kết quả hàng ngày ở độ tuổi hiện tại không thể thay thế đánh giá tính đủ điều kiện của nó."
            ]
          }
        ],
        "faqs": [
          {
            "question": "Tại sao kết quả có thể khác với năm hiển thị trên lịch?",
            "answer": "Phép trừ năm dương lịch sẽ bỏ qua việc sinh nhật có xảy ra hay không. Đã hoàn thành việc đếm số tuổi sinh nhật thực tế đã đạt được theo quy ước về ngày đã nêu."
          },
          {
            "question": "Thay vào đó, tôi có thể sử dụng số ngày đã trôi qua chia cho 365 không?",
            "answer": "Không dành cho một năm hoàn thành chính xác. Năm nhuận và vị trí của ngày sinh làm cho lối tắt đó không đáng tin cậy về ranh giới tuổi tác."
          }
        ]
      }
    },
    "legalLabels": {
      "privacy": "Quyền riêng tư và cookie",
      "terms": "Sử dụng & hạn chế",
      "contact": "Liên hệ & chỉnh sửa",
      "notice": "Ước tính cho thông tin chung. Dịch vụ này không cung cấp tư vấn về thuế cá nhân, pháp lý, bảng lương hoặc đầu tư, chuẩn bị hồ sơ khai thuế hoặc đại diện cho bạn. Kiểm tra năm, địa điểm và loại trừ đã nêu trước khi dựa vào kết quả.",
      "tracking": "Google Analytics bật mặc định và có thể tắt ở cuối trang. Dữ liệu nhập vào máy tính không được gửi đi. AdSense đã được kết nối để yêu cầu quảng cáo không cá nhân hóa. Google và đối tác có thể dùng cookie, web beacon, địa chỉ IP và mã nhận dạng để phân phối và đo lường quảng cáo. Quảng cáo không cá nhân hóa vẫn có thể dùng cookie. Việc hiển thị tùy thuộc phê duyệt trang web, cài đặt tài khoản và yêu cầu đồng ý áp dụng. Trang tiếng Trung vẫn tắt phân tích và quảng cáo."
    },
    "legal": {
      "privacy": [
        [
          "Phạm vi và nhà điều hành",
          "Myeotiji được vận hành từ Hàn Quốc. Thông báo này áp dụng cho các trang tiếng Việt. Liên hệ: contact@myeotiji.kr. Các ngôn ngữ khác có thể có cài đặt khác."
        ],
        [
          "Đầu vào máy tính",
          "Tính toán chạy trong trình duyệt của bạn. Phiên bản này không gửi số tiền, lương, ngày tháng hoặc kết quả tính toán tới cơ sở dữ liệu của nhà điều hành hoặc dịch vụ phân tích. Không đặt dữ liệu cá nhân vào URL hoặc gửi tài liệu nhận dạng, chi tiết tài khoản hoặc hồ sơ bảng lương cho chúng tôi."
        ],
        [
          "Phân tích, quảng cáo và cookie",
          "Google Analytics bật mặc định và có thể tắt ở cuối trang. Dữ liệu nhập vào máy tính không được gửi đi. AdSense đã được kết nối để yêu cầu quảng cáo không cá nhân hóa. Google và đối tác có thể dùng cookie, web beacon, địa chỉ IP và mã nhận dạng để phân phối và đo lường quảng cáo. Quảng cáo không cá nhân hóa vẫn có thể dùng cookie. Việc hiển thị tùy thuộc phê duyệt trang web, cài đặt tài khoản và yêu cầu đồng ý áp dụng. Trang tiếng Trung vẫn tắt phân tích và quảng cáo."
        ],
        [
          "Lưu trữ cần thiết và xử lý ở nước ngoài",
          "Vercel cung cấp và bảo vệ trang web này. Các yêu cầu nhất thiết phải hiển thị thông tin kết nối như địa chỉ IP, URL được yêu cầu, thời gian, tiêu đề thiết bị/trình duyệt và tín hiệu bảo mật cho cơ sở hạ tầng lưu trữ. Thông tin như vậy có thể được xử lý bên ngoài quốc gia của bạn, kể cả ở Hoa Kỳ hoặc các địa điểm có cơ sở hạ tầng khác. Việc tắt phân tích không loại bỏ quá trình xử lý này. Chúng tôi sử dụng nó để phân phối, bảo mật và điều tra lỗi chứ không phải để quảng cáo hồ sơ."
        ],
        [
          "Giữ chân và lựa chọn của bạn",
          "Dữ liệu đầu vào của máy tính không được chúng tôi giữ lại dưới dạng hồ sơ máy chủ. Nhật ký lưu trữ tuân theo việc lưu giữ của nhà cung cấp và cài đặt dự án hiện hành; chúng tôi chưa xác minh một khoảng thời gian lưu giữ cố định duy nhất cho tất cả nhật ký cơ sở hạ tầng. Hãy liên hệ với chúng tôi để biết thông tin chi tiết có thể áp dụng hoặc để yêu cầu quyền truy cập, chỉnh sửa, xóa hoặc hạn chế theo luật của bạn. Chúng tôi đánh giá các yêu cầu và ngoại lệ pháp lý, đồng thời không hứa rằng tất cả nhật ký nhà cung cấp có thể bị xóa ngay lập tức. Đóng trang sẽ xóa trạng thái tính toán trong bộ nhớ của nó; trình duyệt của bạn có thể lưu giữ lịch sử hoặc khôi phục một tab."
        ],
        [
          "Email và liên kết bên ngoài",
          "Nếu bạn chọn gửi email cho chúng tôi, chúng tôi sẽ nhận được địa chỉ và tin nhắn của bạn để xử lý yêu cầu và chỉ giữ lại những gì cần thiết cho mục đích đó hoặc nghĩa vụ pháp lý. Sử dụng các ví dụ hư cấu chứ không phải hồ sơ tài chính cá nhân thực tế. Email không cần thiết để tính toán. Các tài liệu tham khảo chính thức mở các trang web của bên thứ ba với các chính sách riêng của họ. Những thay đổi trong việc theo dõi hoặc sử dụng dữ liệu yêu cầu phải cập nhật thông báo này và thực hiện mọi lựa chọn bắt buộc về mặt pháp lý trước khi kích hoạt."
        ]
      ],
      "terms": [
        [
          "Mục đích",
          "Giải thích chung và số học tự phục vụ miễn phí. Chúng tôi không tự nhận mình là luật sư, kế toán, người khai thuế, người cung cấp bảng lương, cố vấn đầu tư hoặc cơ quan chính phủ cho bạn. Không có mối quan hệ chuyên nghiệp-khách hàng nào được tạo ra chỉ bằng cách sử dụng máy tính."
        ],
        [
          "Kiểm tra các giả định",
          "Kết quả là ước tính cho năm, khu vực pháp lý và mô hình đã nêu. Tình trạng thuế, miễn trừ, tài liệu kế hoạch, quy tắc địa phương, luật làm tròn và thay đổi có thể làm thay đổi kết quả thực tế. Một ví dụ không phải là một sự đảm bảo. Xác minh với cơ quan chính thức có liên quan hoặc chuyên gia có trình độ trước khi nộp đơn, trả lương, đầu tư, quyên góp hoặc đặt chuyến du lịch."
        ],
        [
          "Giới hạn cụ thể",
          "Làm thêm giờ của Hoa Kỳ sử dụng mức cơ bản không được miễn trừ của liên bang, không phải tất cả các quy định của tiểu bang. Tiền lương mang về nhà là một minh họa đơn giản hàng năm, không phải là phép tính W-4 hoặc nộp hồ sơ. Trận đấu 401(k) không phải là số dư được giao hoặc đề xuất đóng góp. Các công cụ trung bình cổ phiếu và công cụ phức hợp không đề xuất chứng khoán hoặc lợi nhuận đảm bảo. Công cụ ngày và tuổi không quyết định tính đủ điều kiện pháp lý hoặc thời hạn."
        ],
        [
          "Sai sót và trách nhiệm",
          "Báo cáo lỗi đáng ngờ bằng cách sử dụng thông tin đầu vào hư cấu và URL bị ảnh hưởng. Chúng tôi có thể sửa chữa, cảnh báo hoặc tạm thời hạn chế một công cụ bị ảnh hưởng khi các giả định của nó không thể được xác minh. Thông báo này mô tả phạm vi; nó không loại trừ trách nhiệm pháp lý không thể được loại trừ theo pháp luật, bao gồm trách nhiệm pháp lý hiện hành đối với hành vi sai trái có chủ ý hoặc sơ suất nghiêm trọng hoặc loại bỏ các quyền bắt buộc của người tiêu dùng."
        ],
        [
          "Hỗ trợ và thay đổi",
          "Hỗ trợ xử lý các lỗi kỹ thuật và chỉnh sửa nguồn chung. Không yêu cầu các vị trí thuế cá nhân, các quyết định pháp lý, chuẩn bị hồ sơ hoặc đại diện. Chúng tôi sẽ chuyển những yêu cầu đó đến cơ quan có liên quan hoặc chuyên gia có trình độ. Những thay đổi quan trọng được phản ánh trong ngày của trang; kiểm tra lại các giả định mỗi lần."
        ]
      ],
      "contact": [
        [
          "Các vấn đề kỹ thuật, chỉnh sửa và yêu cầu về quyền riêng tư",
          "Gửi email tới contact@myeotiji.kr kèm theo URL trang, năm/khu vực áp dụng và một ví dụ hư cấu hiển thị kết quả mong đợi và được hiển thị. Bạn cũng có thể yêu cầu thông tin về xử lý dữ liệu hoặc thực hiện các quyền riêng tư hiện hành tại đây. Chúng tôi không yêu cầu tài khoản hoặc biểu mẫu."
        ],
        [
          "Giữ thông tin của bạn an toàn",
          "Không gửi email số nhận dạng chính phủ, tài khoản ngân hàng, mật khẩu, phiếu lương đầy đủ hoặc chứng từ thuế thực tế. Chúng tôi không cung cấp tư vấn về thuế cá nhân, pháp lý hoặc đầu tư hoặc hành động thay mặt bạn. Để biết thời hạn nộp hồ sơ, thanh toán hoặc tuyển dụng, hãy liên hệ trực tiếp với cơ quan có thẩm quyền hoặc chuyên gia có trình độ."
        ]
      ]
    },
    "policy": [
      {
        "heading": "Mục đích và quyền tác giả",
        "text": "Myeotiji công bố phần giải thích về các máy tính có sẵn trên trang này. Những hướng dẫn này được chuẩn bị với sự hỗ trợ của AI và được kiểm tra theo phương pháp tính toán đã nêu, các ví dụ hoạt động và tài liệu tham khảo được trích dẫn. Tên tác giả xác định Myeotiji là dịch vụ xuất bản; nó không yêu cầu được xem xét bởi một kế toán viên, luật sư hoặc cố vấn được quản lý có tên."
      },
      {
        "heading": "Nguồn, ngày tháng và các quy tắc áp dụng",
        "text": "Đối với các chủ đề về luật, thuế, tiền lương và bảo hiểm xã hội, chúng tôi ưu tiên các ấn phẩm và liên kết đến các tài liệu liên quan của cơ quan công quyền có trách nhiệm. Các điều khoản của nhà cung cấp và tiêu chuẩn kỹ thuật được xác định như vậy. Một ví dụ toán học do Myeotiji viết là một minh họa chứ không phải là một trích dẫn của cơ quan có thẩm quyền. Ngày cập nhật hiển thị ghi lại đánh giá nội dung quan trọng chứ không phải tự động làm mới hàng ngày. Quốc gia, năm và các trường hợp loại trừ được nêu trong từng vấn đề hướng dẫn."
      },
      {
        "heading": "Những gì một tính toán có thể và không thể thiết lập",
        "text": "Chúng tôi kiểm tra các ví dụ số đại diện và điều kiện biên. Các mô hình đơn giản vẫn bỏ qua những thông tin có thể thay đổi khoản thanh toán hoặc quyền lợi thực tế. Tăng trưởng đầu tư giả định không phải là một khoản lợi nhuận được hứa hẹn và ước tính tiền lương không phải là đánh giá thuế cuối cùng. Ví dụ sử dụng các giả định được hiển thị; Người đọc nên xác minh hồ sơ thực tế của nhà cung cấp, người sử dụng lao động hoặc cơ quan có thẩm quyền trước khi dựa vào một con số để đưa ra quyết định sau đó."
      },
      {
        "heading": "Sửa chữa và phản hồi",
        "text": "Nếu bạn tìm thấy công thức, nguồn, bản dịch hoặc ví dụ không chính xác, vui lòng gửi địa chỉ trang, thông tin đầu vào có liên quan và kết quả mà bạn mong đợi đến địa chỉ liên hệ của chúng tôi. Không gửi giấy tờ tùy thân, bảng lương đầy đủ, số tài khoản hoặc thông tin cá nhân không cần thiết khác. Chúng ta có thể sử dụng một ví dụ có thể tái tạo để điều tra và cập nhật lời giải thích."
      }
    ]
  }
};
