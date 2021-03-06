var triggerFunctions = {};

/**
 * Cryptopia Balance special trigger
 *
 * A quick and hacky way to detect the active currency
 * selected on the balances page
 *
 * @param {Element} e
 */
triggerFunctions.cryptopiaBalances = (e) => {
	try {
		var curr = e.target.parentNode.childNodes[3].childNodes[3].innerText;
		if (null !== curr)
			return {
				curr : curr.trim()
			}
	} catch (e) {
	}
	return {};
}

/**
 * Cryptopia special trigger for non-btc pricees
 *
 * @param {Element} c
 */
triggerFunctions.cryptopiaCurrency = (c) => {
	try {
		return {
			curr : document.querySelector('span.tradepair-symbol').innerText.split('/')[0].trim()
		}
	} catch (e) {}
	return {};
}

/**
 * Poloniex special trigger for non-btc pricees
 *
 * @param {Element} c
 */
triggerFunctions.poloniexCurrency = (c) => {
	try {
		return {
			curr : document.querySelector('div.mainHeading div.chartTitle div.code').innerText.split('/')[0].trim()
		}
	} catch (e) {}
	return {};
}

/**
 * Poloniex Balance special trigger
 *
 * @param {Element} e
 */
triggerFunctions.poloniexBalances = (e) => {
	try {
		var curr = e.target.parentNode.getAttribute('data-url');
		if (null !== curr)
			return {
				curr : curr.trim()
			}
	} catch (e) {
	}
	return {};
}

/**
 * Binance basic exchange currency detection
 *
 * @param {Element} e
 */
triggerFunctions.binanceBasic = (e) => {
	try {
		var curr = e.target.previousElementSibling;
		if (null !== curr)
			return {
				curr :  curr.innerHTML.split('/')[1].trim()
			}
	} catch (e) {
	}
	return {};
}

/**
 * Binance advanced exchange currency detection
 *
 * @param {Element} e
 */
triggerFunctions.binanceAdvanced = (e) => {
	try {
		var curr = e.target.parentNode.children[1];
		if (null !== curr)
			return {
				curr :  curr.innerHTML.split('/')[1].trim()
			}
	} catch (e) {
	}
	return {};
}

/**
 * Simex basic exchange currency detection
 *
 * @param {Element} e
 */
triggerFunctions.simexBasic = (e) => {
	try {
		return {
			curr : document.querySelector('.col-md-push-8 .list-group-item .col-sm-8 .nav .active a').innerText.split('/')[0].trim()
		}
	} catch (e) {}
	return {};
}

/**
 * Bitrue exchange currency detection
 *
 * @param {Element} e
 */
triggerFunctions.bitrueBasic = (e) => {
	try {
		return {
			curr : document.querySelector('#root div.trade-title > ul > li.active').textContent.trim()
		}
	} catch (e) {}
	return {};
}


/**
 * Bitrue exchange currency detection
 *
 * @param {Element} e
 */
triggerFunctions.bitrueAdvanced = (e) => {
	try {
		return {
			curr : document.querySelector("#root div.trade-right div.bid-ask-lists-header > span:nth-child(1)").textContent.split("(")[1].replace(")", "").trim()
		}
	} catch (e) {}
	return {};
}

/**
 * Bitrue exchange currency detection
 *
 * @param {Element} e
 */
triggerFunctions.bitrueAdvanced2 = (e) => {
	try {
		return {
			curr : document.querySelector("#root div.trade-right div.bid-ask-lists-header > span:nth-child(2)").textContent.split("(")[1].replace(")", "").trim()
		}
	} catch (e) {}
	return {};
}

/**
 * Stex exchange currency detection
 *
 * @param {Element} e
 */
triggerFunctions.stexAdvanced = (e) => {
	try {
		return {
			curr : document.querySelector(".all-pairs-tab.active").textContent.trim()
		}
	} catch (e) {}
	return {};
}

/**
 * LAToken exchange currency detection
 *
 * @param {Element} e
 */
triggerFunctions.latokenAdvanced = (e) => {
	try {
		return {
			curr : window.location.href.split("exchange/")[1].trim()
		}
	} catch (e) {}
	return {};
}

/**
 * bithumb exchange currency detection
 *
 * @param {Element} e
 */
triggerFunctions.bithumbAdvanced = (e) => {
	try {
		return {
			curr : document.querySelector("#main div.content-body app-basic-trade section.right-group section.symbol-plate div.ant-tabs-tab-active").textContent.trim()
		}
	} catch (e) {}
	return {};
}