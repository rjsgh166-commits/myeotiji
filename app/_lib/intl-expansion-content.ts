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
  }
};
