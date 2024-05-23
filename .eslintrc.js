module.exports = {
	root: true,
	extends: [
		"@react-native",
		"eslint-config-prettier", // eslint에서 prettier와 겹치는 설정 끄는 플러그인, 가장 마지막에 있어야함, "prettier"로 써도됨
	],
	rules: {
		quotes: [1, "double"], // 쌍따옴표 사용
		"no-mixed-spaces-and-tabs": [1, "smart-tabs"], // 탭, 띄어쓰기 혼용을 코드 alignment로 사용되었을 때만 허용
		// "react-native/no-inline-styles": 0, // inline-style 허용
		"@typescript-eslint/no-unused-vars": 1, // 사용하지 않은 변수 무시
		"prettier/prettier": [
			1,
			{
				endOfLine: "auto",
			},
		],
	},
};
