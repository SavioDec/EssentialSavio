const sidebar = document.querySelector("#sidebar");
const webview = document.querySelector("webview");


document.querySelectorAll('.btnSideBarWpp, .btnSideBarInsta, .btnSideBarYtb').forEach((button) => {
  button.addEventListener('click', () => {
      // Oculta todas as views
      document.querySelectorAll('#content webview').forEach((view) => {
          view.style.display = 'none';
      });

      // Exibe a view correspondente ao botão clicado
      const targetId = button.getAttribute('data-target');
      const targetView = document.getElementById(targetId);

      if (targetView) {
          targetView.style.display = 'flex'; // Use flex para ocupar 100%
      }
  });
});




