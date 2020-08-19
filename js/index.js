var ajax = new XMLHttpRequest();
var id = 15
var picBookPageVos = ''
var picBookVideoUrl = ''
ajax.open('GET', 'http://test.i.hqkid.cn/robot/picLibraryContent/findById?id=' + id, true);
ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) {
        var resData = JSON.parse(ajax.responseText).data
        console.log(resData)
        $('title').text(resData.picBookInfo.picBookTitle)
        $('.cover').attr('src',resData.picBookInfo.picBookThumb)
        picBookPageVos = resData.picBookInfo.picBookPageVos
        $('#fyAudio').attr('src',picBookPageVos[0].audioPath)
        // 视频数据
        picBookVideoUrl = resData.videoInfo.picBookVideoUrl
        
        $('.center span').text(transTime(resData.videoInfo.duration))
        $('.center h3').text(resData.videoInfo.picBookVideoTitle)
        $('.img1').attr('src',resData.videoInfo.picBookVideoThumb)
        // 音频数据
        $('#myaudio').attr('src',resData.audioInfo.picBookAudioUrl)
        $('.audio h3').text(resData.audioInfo.picBookAudioTitle)
        $('#ultimatelyTime').text(transTime(resData.audioInfo.duration))
        for (let index = 0; index < resData.picBookInfo.picBookPageVos.length; index++) {
            $('#bb-bookblock').append(`<div class="bb-item" style="display: none;">
                                            <div class="content">
                                                <div class="scroller">
                                                    <img src="${resData.picBookInfo.picBookPageVos[index].imgPath}" style="width: 100%;">
                                                </div>
                                            </div>
                                        </div>`)
        }
        cfdy()
    }
}
ajax.send();