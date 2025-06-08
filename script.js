document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const generateReportButton = document.getElementById('generate-report');
    const reportContainer = document.getElementById('report-container');
    const completedTasksElement = document.getElementById('completed-tasks');
    const pendingTasksElement = document.getElementById('pending-tasks');

    // Función para generar el reporte
    generateReportButton.addEventListener('click', () => {
        let completedTasks = 0;
        let pendingTasks = 0;

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                completedTasks++;
            } else {
                pendingTasks++;
            }
        });

        // Mostrar el reporte en el HTML
        completedTasksElement.textContent = completedTasks;
        pendingTasksElement.textContent = pendingTasks;

        // Hacer visible el contenedor del reporte
        reportContainer.style.display = 'block';
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                checkbox.parentElement.style.textDecoration = 'line-through';
            } else {
                checkbox.parentElement.style.textDecoration = 'none';
            }
        });
    });
});
