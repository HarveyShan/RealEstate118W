const listings = [
    {
        title : 'Sunshine Paradise Apartment',
        agent : 'Josh Dunlap',
        price : '1,100,000',
        size : 2500,
        bedrooms : 2,
        bathrooms : 3, 
        imgUrl : 'house1.jpeg'
    },
    {
        title : 'Sunset Paradise Apartment',
        agent : 'Josh Dunlap',
        price : '2,000,000',
        size : 3000,
        bedrooms : 2,
        bathrooms : 2, 
        imgUrl : 'house2.jpeg'
    },
    {
        title : 'Sunrise Paradise Apartment',
        agent : 'Josh Dunlap',
        price : '1,123,000',
        size : 3200,
        bedrooms : 2,
        bathrooms : 3,
        imgUrl : 'house1.jpeg'
    },
    {
        title : 'Sunshine Paradise Apartment',
        agent : 'Josh Dunlap',
        price : '2,200,000',
        size : 5000,
        bedrooms : 2,
        bathrooms : 4, 
        imgUrl : 'house2.jpeg'
    }
]

const view = document.querySelector(".listing-view");


function getFirstChild(el){
    var firstChild = el.firstChild;
    while(firstChild != null && firstChild.nodeType == 3){ // skip TextNodes
      firstChild = firstChild.nextSibling;
    }
    return firstChild;
  }


listings.forEach( item => {
    
    const card = ` <div class="card mb-4">
    <img src="${item.imgUrl}" class="card-img-top" />
    <div class="card-body">
      <h5 class="listing-title card-title">${item.title}</h5>
      <p class=" card-text">
        by: <span class="agent">${item.agent}</span>
      </p>
      <div class="d-flex align-items-center">
        <img src="money.png" class="img-responsive" style="max-height: 2rem; max-width: 2rem;"/>
        <p class="card-text ml-2">
            $<span class="price">${item.price}</span>
             total 
        </p>
    </div>
    <p>Details: <span class="size">${item.size} </span>sq ft </p>
    
    <p class=" card-text">
        <span class="bedrooms">${item.bedrooms}</span> Bedrooms
    </p>
    <p class=" card-text">
        <span class="bathrooms">${item.bathrooms}</span> Bathrooms
    </p>
      <a href="#" class="btn btn-primary">Learn More</a>
    </div>
</div>`;
    const element = document.createElement('div');
    element.innerHTML = card;
    view.appendChild(getFirstChild(element));

})