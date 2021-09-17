function genSidebarConfig(title) {
	return [
		{
			title,
			collapsable: false,  //是否可折叠
			children: [          //这里省略了md的扩展名
				'',
				'getting-started',
				'basic-config',
				'assets',
				'markdown',
				'using-vue',
				'custom-themes',
				'i18n',
				'deploy'
			]
		}
	]
}


module.exports = {
	title: 'Morty-heyunfei-docs（云飞的文档）',
	description: '记录一个过程',
	head: [
		['link', { rel: 'icon', href: '/logo.png' }]
	],

	themeConfig: {
		displayAllHeaders:true,
		nav: [
			{
				text: '首页',
				link: '/'
			},
			{
				text: '总结文档',
				link: '/guide/如何实现组件全局注册和工程化',    //Blog指南内的内容
			},
			{
				text: '日常1',
				link: '/demo/',    //Blog指南内的内容
			}
			
		],
		// 侧边栏
		sidebar: {
			'/guide/': [
				[
					'如何实现组件全局注册和工程化',
					'如何实现组件全局注册和工程化'
				]
			],
			'/demo/': require('../demo/sidebar.js')
		}
	}
}
