// functionality on click heart icon the heart count increase on navbar


 const heartIcons = document.getElementsByClassName('heart-icon')

 for(const item of heartIcons){
    item.addEventListener('click', function(){
        const HeartCount = document.getElementById('heart-count').innerText
        const UpdatedheartCount = Number(HeartCount) + 1;
        document.getElementById('heart-count').innerText = UpdatedheartCount
    })
 }

 const CopyButtons = document.getElementsByClassName('copy-btn')

 for(const btn of CopyButtons){
    btn.addEventListener('click', function(){
        const copyCount = document.getElementById('copy-count').innerText
    const UpdatedCopyCount = Number(copyCount) + 1 ;
    document.getElementById('copy-count').innerText = UpdatedCopyCount
    const copyNumber = btn.parentNode.parentNode.children[1].children[2].innerText
    alert(`নাম্বার টি কপি হয়েছে : ${copyNumber}` )

    navigator.clipboard.writeText(copyNumber)


    })
    

 }


const CallBtns = document.getElementsByClassName('call-btn')

for (const btn of CallBtns){
    btn.addEventListener('click', function(){

        const CoinCount = document.getElementById('coin-count').innerText
        if(CoinCount <= 0){
            alert('আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
            return
        }
        const ServiceName = btn.parentNode.parentNode.children[1].children[1].innerText
        const ServiceNumber = btn.parentNode.parentNode.children[1].children[2].innerText
        alert(`Calling ${ServiceName} ${ServiceNumber}
            `)


            const CurrentCoins = Number(CoinCount) - 20;
            document.getElementById('coin-count').innerText = CurrentCoins

            const CardTitle = btn.parentNode.parentNode.children[1].children[0].innerText
            console.log(CardTitle);
            const div = document.createElement('div')
            const CurrentTime = new Date().toLocaleTimeString()
            const HistoryContainer = document.getElementById('call-history-container')
            div.innerHTML = `
             <div class="flex justify-between  p-3 gap-13 bg-gray-100 rounded-xl">
                    <div class="text-left">
                        <h1 class="font-bold">${CardTitle}</h1>
                        <p>${ServiceNumber}</p>
                    </div>
                    <div>
                        <h1> ${CurrentTime} </h1>
                    </div>
                </div>
            
            
            `
            HistoryContainer.appendChild(div)
            
            
        
    })}

    document.getElementById('clear-btn').addEventListener('click', function(){
        const callHistoryCOntainer = document.getElementById('call-history-container')
        callHistoryCOntainer.style.display = 'none'
    })


