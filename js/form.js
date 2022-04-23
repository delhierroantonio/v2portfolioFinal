const $form = document.querySelector('#form');
$form.addEventListener('submit', handleSubmit);

async function handleSubmit() {
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application / json'
        }
    });
    if (response.ok) {
        this.reset();
        alert('thanks for gettin in contact I will be in touch soon');
    }
}