HUB IA — PORTAL TEMÁTICO COM VAGAS EM TI
==========================================

ARQUIVOS
- index.html: estrutura da página.
- style.css: layout responsivo, cores, CSS Grid e efeitos hover.
- script.js: menu sanduíche, validação e envio do formulário.
- audio/tema.wav: áudio local de demonstração.
- google-apps-script.gs: código para gravar as candidaturas no Google Planilhas.

ABRIR NO VS CODE
1. Extraia a pasta do ZIP.
2. Abra a pasta hub-ia-vagas no VS Code.
3. Instale/ative a extensão Live Server, se ainda não tiver.
4. Clique com o botão direito em index.html > Open with Live Server.
5. O site abre no navegador. O vídeo do YouTube requer internet.

CONFIGURAR A PLANILHA GOOGLE
1. Entre no Google Planilhas e crie uma planilha chamada "Hub IA - Candidaturas".
2. Na planilha, clique em Extensões > Apps Script.
3. Apague o código de exemplo e copie todo o conteúdo de google-apps-script.gs.
4. Clique em Salvar.
5. Clique em Implantar > Nova implantação.
6. Selecione o tipo "Aplicativo da Web".
7. Em "Executar como", selecione sua conta. Em acesso, use a opção autorizada pelo professor.
   Atenção: se permitir acesso a qualquer pessoa, a URL poderá receber dados de qualquer visitante.
   Use apenas para a atividade escolar e não armazene dados sensíveis.
8. Clique em Implantar, autorize o acesso e copie a URL do aplicativo que termina em /exec.
9. Abra script.js e substitua a linha const API_URL = ""; pela URL copiada entre aspas.
   Exemplo: const API_URL = "https://script.google.com/macros/s/SEU_ID/exec";
10. Salve script.js e atualize o site no navegador.

IMPORTANTE SOBRE A CONFIRMAÇÃO
O navegador usa fetch com mode "no-cors" para permitir o POST simples ao Apps Script sem
ler a resposta do servidor. Por isso, a mensagem no site significa que a solicitação foi
enviada pelo navegador, mas não comprova por si só que a linha foi gravada. A validação
real é abrir a planilha e verificar se a candidatura apareceu. Faça esse teste antes de entregar.

TESTE FINAL
- Navegue pelos links do menu.
- Em tela estreita, teste o botão sanduíche.
- Dê play no áudio local.
- Confira se o vídeo aparece (internet necessária).
- Tente enviar o formulário vazio: os campos obrigatórios devem ser validados.
- Envie uma candidatura de teste com dados fictícios e confira a planilha.
- Verifique se os seis campos aparecem corretamente na planilha.

COMPACTAR E ENVIAR
1. Salve todos os arquivos.
2. Feche/pare o Live Server, se quiser.
3. No Explorador de Arquivos, clique com o botão direito na pasta hub-ia-vagas.
4. Windows 11: Compactar para arquivo ZIP (ou Enviar para > Pasta compactada).
5. Confira se o ZIP contém a pasta e todos os arquivos.
6. Envie para ricardosantos08@prof.educacao.sp.gov.br.
7. Assunto conforme a folha: [3A Front-End e IA] Nome Completo - Portal Vagas TI com API
   Substitua "Nome Completo" pelo seu nome real.
8. Anexe o ZIP e envie.

OBSERVAÇÕES
- As vagas exibidas são exemplos educacionais, não oportunidades reais.
- O áudio é uma trilha simples criada para demonstrar o elemento <audio controls>.
- O site usa Google Fonts; se não houver internet, haverá fontes alternativas.
