/**
 * HUB IA — Google Apps Script
 * Cole este código em Extensões > Apps Script na planilha criada para a atividade.
 * Salve e implante como Aplicativo da Web: executar como você; acesso conforme
 * a orientação do professor (para teste escolar, pode ser "qualquer pessoa").
 */
function doPost(e) {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName("Candidaturas") || spreadsheet.insertSheet("Candidaturas");

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Data de recebimento",
        "Nome completo",
        "E-mail",
        "Telefone/WhatsApp",
        "Cargo pretendido",
        "Pretensão salarial",
        "Experiência / mensagem",
        "Origem"
      ]);
      sheet.setFrozenRows(1);
    }

    const data = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    const required = ["nome", "email", "telefone", "cargo", "salario", "experiencia"];
    required.forEach(function (key) {
      if (!data[key] || String(data[key]).trim() === "") {
        throw new Error("Campo obrigatório ausente: " + key);
      }
    });

    // Prefixo apostrophe evita que entradas do usuário sejam interpretadas como fórmulas.
    const safe = function (value) {
      const text = String(value == null ? "" : value).trim();
      return /^[=+\-@]/.test(text) ? "'" + text : text;
    };

    sheet.appendRow([
      new Date(),
      safe(data.nome),
      safe(data.email),
      safe(data.telefone),
      safe(data.cargo),
      safe(data.salario),
      safe(data.experiencia),
      safe(data.origem || "Hub IA")
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: "Candidatura registrada." }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: String(error.message || error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput("Hub IA API ativa. Envie uma candidatura pelo formulário.")
    .setMimeType(ContentService.MimeType.TEXT);
}
