// Categorize part has taken from another project 
(function(){

    const buttons = document.querySelectorAll('.btn');
    const storeImages = document.querySelectorAll('.card');

    buttons.forEach((buttons) => {
        buttons.addEventListener('click',(e) =>{
            e.preventDefault();
            const filter = e.target.dataset.filter;

            storeImages.forEach((item)=>{
                 // Tüm ürün görüntülerini döngüye alır
                if (filter ==='all'){
                    // Eğer filtrenin değeri "all" ise, tüm ürünleri gösterir
                    item.style.display ='block';
                } else{
                    // Değilse, ürün görüntülerini filtre değerine göre gizler veya gösterir
                    if(item.classList.contains(filter)){ 
                        item.style.display ='block'; // Ürün, filtre değerine eşleşiyorsa görünür yapar
                    }else{
                        item.style.display ='none'; // Ürün, filtre değerine eşleşmiyorsa gizler
                    }
                }
            })
        })
    })
})();