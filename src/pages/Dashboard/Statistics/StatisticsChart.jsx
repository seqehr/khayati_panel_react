// Hooks
import useTheme from "../../../hooks/useTheme";

// Libraries
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

// Data
import { bitcoinPriceData } from "./statisticsChartData";

const StatisticsChart = (props) => {
	const { theme } = useTheme();

	return (
		<ResponsiveContainer>
			<AreaChart data={bitcoinPriceData}>
				<defs>
					<linearGradient id="dashboardStatisticsChartGradient" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor={`${theme === "light" ? "#FF9416" : "#DD851D"}`} stopOpacity={0.4} />
						<stop offset="75%" stopColor={`${theme === "light" ? "#FF9416" : "#DD851D"}`} stopOpacity={0.05} />
					</linearGradient>
				</defs>

				<YAxis
					dataKey="price"
					type="number"
					axisLine={false}
					tickLine={false}
					tickFormatter={(views) => + views / 1000 + "K"}
				/>
				<XAxis dataKey="date" axisLine={false} tickLine={false} tickCount={3} />
				<Tooltip />
				<Area
					type="monotone"
					dataKey="price"
					stroke={`${theme === "light" ? "#FF9416" : "#DD851D"}`}
					strokeWidth={3}
					fill="url(#dashboardStatisticsChartGradient)"
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};

export default StatisticsChart;
