function renderResources(resources) {
    const tableBody = document.getElementById('resource-table-body');
    tableBody.innerHTML = '';
    resources.forEach(resource => {
        const row = document.createElement('tr');

        const titleCell = document.createElement('td');
        titleCell.textContent = resource.title;
        row.appendChild(titleCell);

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = resource.description;
        row.appendChild(descriptionCell);

        const linkCell = document.createElement('td');
        const link = document.createElement('a');
        link.href = resource.link;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'resource-link';
        link.textContent = 'Download';
        linkCell.appendChild(link);
        row.appendChild(linkCell);

        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('/database/resources.json')
        .then(response => response.json())
        .then(data => {
            renderResources(data.resources);
        })
        .catch(error => console.error('Error fetching the resources:', error));
});
