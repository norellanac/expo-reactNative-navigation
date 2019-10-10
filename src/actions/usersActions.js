export const traerTodos = () => async (dispatch) => {   /*dispara el evento y contacta al reducer  */
    let dataForm = '_method=' + encodeURIComponent('POST');
			dataForm += '&code=' + encodeURIComponent('b3');

			const response = await fetch(`http://192.168.1.130:8000/api/stickers`, {
				//importante revisar en api de laravel que este corectamente implementado laravel-cors y la url escrita EXACTAMENTE igual que en las rutas
				//credentials: 'include', //pass cookies, for authentication
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
					Authorization:
						'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk4NDVlZDI5ZDg1NWJmNDQwNjM4NDAxNjhiOGUyNDJlYmFkZDIzNzYyMzg2MWRkNjRiNTZjZGE5YWQxNDM0OTFlZjFiY2FhYmVkOTM1NDlkIn0.eyJhdWQiOiIyIiwianRpIjoiOTg0NWVkMjlkODU1YmY0NDA2Mzg0MDE2OGI4ZTI0MmViYWRkMjM3NjIzODYxZGQ2NGI1NmNkYTlhZDE0MzQ5MWVmMWJjYWFiZWQ5MzU0OWQiLCJpYXQiOjE1NzA1NjQ2NjgsIm5iZiI6MTU3MDU2NDY2OCwiZXhwIjoxNjAyMTg3MDY4LCJzdWIiOiI1NyIsInNjb3BlcyI6WyIqIl19.kiHUJozhg-KZpdzr2pXDeYAUVHLenr__gi1u9gWH6use9V56iPold1Md7ea6GGo1hiUU0qkAVR6U8RQlO5ssEC0JmP0R0yREuKvDkcCO5YaMhrgst1USiZcCwDdeoAR7XptUiVHdCXbrnfstsAXtJYkBte9aZrrL4sIYiDV5rzCQRgwFLq3y_YPRlEqGCINhAdDhjiYVb7xQlFEFKvinCV0fhnOL--GgDbNAOOhzRkpaEGBwgm_jy5piJ3NyRaEk-xc49SWBWNly4Jui60pJrzAjoj_1aPZowSZL_YJsgFNFXgRZKsZpqjPmw_F41jcqyu8bzdTC1twIEqtU2A1rTY3K3-lPrmevXk1Pc_KhcN0i7X5nNtIOlSVKfagOt5tOHg3w1Vt6bLPXGYnySBXT-djpeHaGGo0Wh5vdyfiN-n3ZIPYALCUo7ql9woVu9ze08mkszzyGEAzsVksm-HFy1FEkP7lFaIYyMzvSyGSRlpcUwSnwXpm41g7cQFYGv8sQ8reByD6bg-HlSFRytLIsnsfb10LSMba30enXAIpI0jEQlrv84X31o82g8Y3Kx967VnxgX5BqCc8XAxjvMqCgRJI2M9o9Dw0U2tvExlHTU--yismSu4BBgkE_nN8cfhzoagAi7D9G-_gmU_IjHhnlLMz-MFIbTokPuF0QYcXwD60'
				},
				body: dataForm
			});
			const data = await response.json();

    dispatch({
        type: 'traer_usuarios',
        payload: data.sticker
    })
}